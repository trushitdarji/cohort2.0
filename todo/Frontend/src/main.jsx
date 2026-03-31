import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.jsx";
import "./index.css";
import { AuthProvider } from "./auth.context.jsx";
import { TaskProvider } from "./task.contect.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </AuthProvider>,
);
