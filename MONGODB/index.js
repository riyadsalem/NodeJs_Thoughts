const { func, equal } = require("joi");
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

/*
// Comparison Operator
eq => equal 
ne => not equal 
gt => greater than
gte => greater than or equal 
lt => less than 
lte => less than or equal
in =>  values specified in an array.
nin =>  none of the values specified in an array.
*/

/*
async function fetchInformation() {
  //  const users = await User.find({});
  // const users = await User.findOne({ isMarried: false });
  // const users = await User.findById("63426bb127b3f52886f8acfd");
  // const users = await User.find({ isMarried: false }).select("name salary");
  // const users = await User.find({ isMarried: false }).select("-name ").sort("salary"); // AEC
  // const users = await User.find({ isMarried: false }).select("-name ").sort("-salary").limit(2);  // DEC
  // const users = await User.find({ isMarried: false }).countDocuments();
  // const users = await User.find({ age: { $gte: 30 } });
  // const users = await User.find({ age: { $lte: 30 } });
  // const users = await User.find({ salary: { $in: [25000, 40000, 45000] } });

  console.log(users);
}
fetchInformation();
*/

/*
async function db() {
  // const users = await User.find().or([{ isMarried: true }, { age: 30 }]);
  // const users = await User.find().and([{ isMarried: false }, { age: 30 }]);
  // const users = await User.find({ isMarried: false, age: 30 }); // and([{},{}])

  
  // Problem Solve
  // Find Those users whose age is greater thaen 40 or they are unmarried 
  // find only name 
  // shorted them by name
  

  const users = await User.find()
    .or([{ age: { $gt: 40 } }, { isMarried: false }])
    .select("name")
    .sort("name"); // A B C D E ..... 

  console.log(users);
}
db();
*/

/*
User.findById("634279640efbc70b5203cbec")
  .then((user) => {
    user.age = 24;
    console.log(user);
  })
  .catch((error) => console.log(error));
*/

/*
async function updateInformation() {
  
  // const user = await User.findById("634279640efbc70b5203cbec");
  // user.isMarried = false;
  // await user.save();
  // console.log(user);
  

  
  const user = await User.findByIdAndUpdate(
    "634279640efbc70b5203cbec",
    {
      isMarried: true,
      age: 24.9,
    },
    { new: true, isValidators: true }
  );
  console.log(user);
}
updateInformation();
*/

const deleteInformation = async function () {
  await User.findByIdAndDelete("6027d22c7dd46d17c04bdf90");
  // await User.deleteOne({ _id: "634279640efbc70b5203cbec" });
  // await User.deleteMany({ isMarried: false });
};

deleteInformation();
