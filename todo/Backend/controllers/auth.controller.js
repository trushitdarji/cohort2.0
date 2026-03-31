import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(401).json({
      message: "User is already exists",
    });
  }

  const hashPass = await bcrypt.hash(password, 10)

  const user = await userModel.create({
    username,
    email,
    password: hashPass,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "User created successfully",
    user: {
      username,
      email,
    },
  });
}

export async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const logPass = await bcrypt.compare(password, user.password);

  if (!logPass) {
    return res.status(401).json({
      message: "password does not match",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  return res.status(200).json({
    message: "user logged in successfully",
    user: {
      username: user.username,
      email: user.email,
    },
  });
}

export async function getMeController(req, res) {
  const userId = req.user.id;

  const user = await userModel.findById(userId);

  res.status(200).json({
    user,
  });
}

export async function logOutController(req, res) {

  res.clearCookie('token');

  res.status(200).json({
    message: "token deleted successfully",
  });
}
