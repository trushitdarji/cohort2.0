import { useTask } from "../hook/useTask";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { handleGetAllNotes, loading, tasks } = useTask();
  useEffect(() => {
    handleGetAllNotes();
  }, []);

  return (
    <>
      <header>
        <div
          style={{ paddingInline: "2rem", paddingBlock:"0.8rem" }}
          className="nav flex justify-between text-lg bg-blue-600"
        >
          <div className="left">
            <div className="logo">
              <h1>FocusTodo</h1>
            </div>
          </div>
          <div className="right flex gap-3">
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </header>

    <section>
      
    </section>

    </>
  );
};

export default Dashboard;
