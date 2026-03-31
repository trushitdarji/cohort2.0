import { createContext } from "react";
import { useState } from "react";
import {
  createNote,
  getAllNotes,
  deleteNotes,
  completeTask,
} from "./tasks/api/taskApi";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCreateTask = async (subject, task) => {
    setLoading(true);
    try {
      const response = await createNote(subject, task);
      setTasks(response);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleGetAllNotes = async () => {
    setLoading(true);
    try {
      const response = await getAllNotes();
      setTasks(response.tasks);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNotes = async (id) => {
    setLoading(true);
    try {
      const response = await deleteNotes(id);
      setTasks(response);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteTask = async (id) => {
    setLoading(true);
    try {
      const response = await completeTask(id);
      setTasks(response);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        loading,
        setLoading,
        handleCreateTask,
        handleCompleteTask,
        handleDeleteNotes,
        handleGetAllNotes,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
