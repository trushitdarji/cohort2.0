import { useContext } from "react";
import { TaskContext } from "../../task.contect";

export function useTask() {
  const context = useContext(TaskContext);

  return {
    handleCreateTask: context.handleCreateTask,
    handleGetAllNotes: context.handleGetAllNotes,
    handleDeleteNotes: context.handleDeleteNotes,
    handleCompleteTask: context.handleCompleteTask,
    tasks:context.tasks,
    subject:context.subject,
  };
}   
