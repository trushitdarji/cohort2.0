import express from "express";
import { indentifyUser } from "../middlewares/auth.middleware.js";
import {
  completeTaskController,
  createTaskController,
  deleteTaskController,
  getAllNotesController,
} from "../controllers/task.controller.js";

const noteRoutes = express.Router();

noteRoutes.post("/note", indentifyUser, createTaskController);
noteRoutes.get("/get-notes", indentifyUser, getAllNotesController);
noteRoutes.delete("/delete/:id", indentifyUser, deleteTaskController);
noteRoutes.patch("/complete/:id", indentifyUser, completeTaskController);

export default noteRoutes;
