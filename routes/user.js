const express = require("express");
const router = express.Router();
const User = require("../model/User");

/*
// /user POST
// /user GET
// /user/:id Get 
// /user/:id Patch
// /user/:id DELETE
*/
router.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    console.log(user);
    return res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/user", async (req, res) => {
  const users = await User.find({});
  return res.status(200).json({ success: true, users });
});

router.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  return res.json({ success: true, user });
});

router.patch("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

router.delete("/user/:id", async (req, res) => {
  // await User.deleteOne("63443602ea1080dc1656f67f");
  // await User.deleteMany({ age: 24 });

  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({ success: false, message: "Task not found" });
  }
  return res.status(200).json({ success: true, user });
});

module.exports = router;
