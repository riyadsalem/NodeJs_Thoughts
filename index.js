const { func } = require("joi");
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

/*
async function storeInformation() {
  const user = new User({
    name: "RIYAD",
    age: 24,
    isMarried: false,
    salary: 100,
    gender: "Male",
  });
  await user.save();
  console.log(user);
}
storeInformation();
*/

async function fetchInformation() {
  //  const users = await User.find({});
  // const users = await User.findOne({ isMarried: false });
  // const users = await User.findById("63426bb127b3f52886f8acfd");
  // const users = await User.find({ isMarried: false }).select("name salary");
  // const users = await User.find({ isMarried: false }).select("-name ").sort("salary"); // AEC
  // const users = await User.find({ isMarried: false }).select("-name ").sort("-salary").limit(2);  // DEC
  const users = await User.find({ isMarried: false }).countDocuments();

  console.log(users);
}
fetchInformation();
