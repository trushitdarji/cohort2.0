import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  subject: {
    type: String,
  },
  task: {
    type: String,
  },
  complete: {
    type:Boolean,
    default: false,
  },
});

const taskModel = mongoose.model("tasks", taskSchema);

export default taskModel;
