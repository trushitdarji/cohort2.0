import express from "express";
import {
  getMeController,
  loginController,
  registerController,
} from "../controllers/auth.controller.js";
import { indentifyUser } from "../middlewares/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", indentifyUser, registerController);
authRoutes.post("/login", indentifyUser, loginController);
authRoutes.get("/get-me", indentifyUser, getMeController);

export default authRoutes;
