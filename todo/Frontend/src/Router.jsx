import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import Dashboard from "./tasks/pages/Dashboard";

export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/",
        element:<Dashboard />
    }
])