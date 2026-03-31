import taskModel from "../models/note.model.js";

export async function createTaskController(req, res) {
  const user = req.user;
  const { subject, task } = req.body;

  if (!user) {
    return res.status(401).json({
      message: "You want to logged in first",
    });
  }

  const note = await taskModel.create({
    subject,
    task,
    userId:req.user.id
  });

  res.status(201).json({
    message: "task created successfully",
    note
  });
}

export async function getAllNotesController(req, res) {
  const userId = req.user.id;

  const tasks = await taskModel.find({ userId });

  if (!tasks || tasks.length === 0) {
    return res.status(404).json({
      message: "tasks not found",
    });
  }

  res.status(200).json({
    message: "tasks fetched succussfully",
    tasks:tasks
  });
}

export async function deleteTaskController(req, res) {
  const _id = req.params.id;

  const postId = await taskModel.findByIdAndDelete(_id);

  if (!postId) {
    return res.status(404).json({
      message: "post not found",
    });
  }

  res.status(200).json({
    message: "post deleted successfully",
  });
}

export async function completeTaskController(req, res) {
  const _id = req.params.id;

  const updatedTask = await taskModel.findByIdAndUpdate(
    _id,
    { complete: true },
    { new: true },
  );

  if (!updatedTask) {
    return res.status(404).json({
      message: "Sorry task not found",
    });
  }

  res.status(200).json({
    message: "task updated successfully",
    updatedTask: updatedTask.complete,
  });
}
