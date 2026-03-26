import express from "express";
import { indentifyUser } from "../middlewares/auth.middleware.js";
import { createTaskController } from "../controllers/task.controller.js";

const noteRoutes = express.Router();

noteRoutes.post("/note", indentifyUser, createTaskController);

export default noteRoutes;
