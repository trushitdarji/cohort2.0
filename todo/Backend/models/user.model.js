import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exists"],
    require: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
    require: [true, "email is required"],
  },
  password: {
    type: String,
    select:false
  },
});

const userModel = mongoose.model("users",userSchema);

export default userModel;
