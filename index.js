const mongoose = require("mongoose");
const colors = require("colors");
mongoose
  .connect("mongodb://localhost:27017/task")
  .then(() => console.log("DATABASE IS CONECTED"))
  .catch((error) => console.log(error));

const User = require("./model/User.js");
const Task = require("./model/Task.js");

async function db() {
  try {
    /*
    const user = new User({
      name: "Riyad",
      age: 24,
      email: "riayd.m.salem.19988@gmail.com",
      password: "12345",
    });
    await user.save();
    console.log(user);
    */

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
