import userModel from "../models/user.model.js";

export async function registerController(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.create({
    username,
    email,
    password,
  });

  res.status(201).json({
    message: "user registerd successfully",
    username:user.username,
    email:user.email
  });
}
