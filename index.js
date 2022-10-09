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
    const user = new User({
      name: "Riyad",
      age: 24,
      email: "riayd.m.salem.19988@gmail.com",
      password: "12345",
    });
    await user.save();
    console.log(user);
  } catch (error) {
    console.log(colors.red.underline.bold(error.message));
  }
}
db();
