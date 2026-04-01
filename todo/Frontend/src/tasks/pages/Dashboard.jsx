import { useTask } from "../hook/useTask";
import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

const Dashboard = () => {
  const [currunetDate, setcurrunetDate] = useState(new Date());

  const { handleGetAllNotes, loading, tasks } = useTask();
  useEffect(() => {
    handleGetAllNotes();
  }, []);

  return (
    <>
      <header>
        <div
          style={{ paddingInline: "2rem", paddingBlock: "0.8rem" }}
          className="nav flex justify-between text-lg border-b-1   border-b-zinc-700"
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

      <section
        className="main flex flex-col gap-20"
        style={{ marginInline: "10%", marginBlock: "5rem" }}
      >
        <section className="first flex flex-col gap-3.5">
          <div className="top">
            <div className="dates">
              <h1 className="font-bold text-5xl">
                {currunetDate.toDateString()}
              </h1>
            </div>
          </div>
          <div className="bottom flex  gap-3">
            <div className="left">
              <p
                className="bg-zinc-600 w-fit text-zinc-300 rounded-xl "
                style={{ paddingInline: "1rem", fontSize: "0.8rem" }}
              >
                Tasks Remaining
              </p>
            </div>
            <div>
              <p
                className="bg-green-800 w-fit text-green-500 rounded-xl"
                style={{ paddingInline: "0.6rem", fontSize: "0.8rem" }}
              >
                Focused Mode
              </p>
            </div>
          </div>
        </section>

        <section className="second flex gap-8">
          <div className="left">
            <div className="quats">
              <h1
                className="font-bold text-xl max-w-56 bg-zinc-800 rounded-xl"
                style={{
                  paddingInline: "1rem",
                  paddingBlock: "1rem",
                  minWidth: "16rem",
                  minHeight: "20rem",
                }}
              >
                "Every Day Is A Chanse To Be Better"
              </h1>
            </div>
          </div>
          <div className="right  w-full">
            <div className="all-tasks bg-zinc-800 w-full rounded-lg">
              <div className="task1 "
              style={{paddingInline:"1rem",paddingBlock:"0.3rem"}}>
                <div className="subject">
                  <h3 className="font-bold text-xl ">Subject 1</h3>
                </div>
                <div className="task">
                  <p>here is your first task 1</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
