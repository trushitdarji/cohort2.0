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
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
  }
});

const taskModel = mongoose.model("tasks", taskSchema);

export default taskModel;
