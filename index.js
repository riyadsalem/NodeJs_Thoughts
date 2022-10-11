const mongoose = require("mongoose");
const colors = require("colors");
mongoose
  .connect("mongodb://localhost:27017/task")
  .then(() => console.log("DATABASE IS CONECTED"))
  .catch((error) => console.log(error));

const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`SERVER IS RUNNING AT PORT ${port}`);
});

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);
