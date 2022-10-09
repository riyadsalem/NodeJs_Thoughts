const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("DATABASE IS CONNECTED"))
  .catch((error) => console.log(error));

// Schema
// Document , collection, database
/*
const user = [
  { name: "user1", age: 24 },
  { name: "user2", age: 30 },
];
*/

const userShcema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
  salary: Number,
  gender: String,
});

const User = mongoose.model("User", userShcema);
