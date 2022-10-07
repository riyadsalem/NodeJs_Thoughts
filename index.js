const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Database is connected"))
  .catch((error) => console.log(error));
