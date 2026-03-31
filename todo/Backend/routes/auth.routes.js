import express from "express";
import {
  getMeController,
  loginController,
  registerController,
  logOutController
} from "../controllers/auth.controller.js";
import { indentifyUser } from "../middlewares/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);
authRoutes.get("/get-me", indentifyUser, getMeController);
authRoutes.post("/logout",indentifyUser,logOutController)

export default authRoutes;
