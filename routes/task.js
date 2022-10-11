const express = require("express");
const router = express.Router();
const Task = require("../model/Task");

/*
// /task POST
// /task GET
// /task/:id Get 
// /task/:id Patch
// /task/:id DELETE
*/
router.post("/task", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    console.log(task);
    return res.status(201).json({ success: true, task });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/task", async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).json({ success: true, tasks });
});

router.get("/task/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  return res.json({ success: true, task });
});

router.patch("/task/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    return res.status(201).json({ success: true, task });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

router.delete("/task/:id", async (req, res) => {
  // await Task.deleteOne("63443602ea1080dc1656f67f");
  // await Task.deleteMany({ age: 24 });

  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return res.status(404).json({ success: false, message: "Task not found" });
  }
  return res.status(200).json({ success: true, task });
});

module.exports = router;
