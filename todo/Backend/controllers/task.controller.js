import taskModel from "../models/note.model.js";

export async function createTaskController(req, res) {
  const { user } = req.user;
  const { subject, task } = req.body;

  if(!user){
    return res.status(409).json({
      message:"You want to logged in first"
    })
  }

  if (subject && task) {
    return res.status(200).json({
      message: "You already created this task",
    });
  }

  const note = await taskModel.create({
    subject,
    task,
  });

  res.status(201).json({
    message: "task created successfully",
    note: {
      subject: note.subject,
      task: note.task,
    },
  });
}
