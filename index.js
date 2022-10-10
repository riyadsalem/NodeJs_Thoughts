const mongoose = require("mongoose");
const colors = require("colors");
mongoose
  .connect("mongodb://localhost:27017/task")
  .then(() => console.log("DATABASE IS CONECTED"))
  .catch((error) => console.log(error));

const User = require("./model/User.js");
const Task = require("./model/Task.js");

const express = require("express");
const app = express();

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`SERVER IS RUNNING AT PORT ${port}`);
});

/*
async function db() {
  try {
    
    //
    const user = new User({
      name: "Riyad",
      age: 24,
      email: "riayd.m.salem.19988@gmail.com",
      password: "12345",
    });
    await user.save();
    console.log(user);
    //

    const task = new Task({
      description: "This is TASK 1",
      isCompleted: true,
    });
    await task.save();
    console.log(task);
  } catch (error) {
    console.log(colors.red.underline.bold(error.message));
  }
}
  db();
*/

/*
// /task POST
// /task GET
// /task/:id Get 
// /task/:id Patch
// /task/:id DELETE

// /user POST
// /user GET
// /user/:id Get 
// /user/:id Patch
// /user/:id DELETE

*/
app.use(express.json());

app.post("/task", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    console.log(task);
    return res.status(201).json({ success: true, task });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

app.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    console.log(user);
    return res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

app.get("/task", async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).json({ success: true, tasks });
});

app.get("/user", async (req, res) => {
  const users = await User.find({});
  return res.status(200).json({ success: true, users });
});
