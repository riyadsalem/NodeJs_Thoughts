const User = require("../model/User");
const bcrypt = require("bcryptjs");

exports.storeUser = async (req, res) => {
  try {
    // req.body.password = await bcrypt.hash(req.body.password, 8);
    const user = new User(req.body);
    await user.save();
    console.log(user);
    return res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.fetchAllUser = async (req, res) => {
  const users = await User.find({});
  return res.status(200).json({ success: true, users });
};

exports.getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  return res.json({ success: true, user });
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    /*
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    */

    const user = await User.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const keys = Object.keys(req.body);
    for (let key of keys) {
      user[key] = req.body[key];
    }

    await user.save();

    return res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  // await User.deleteOne("63443602ea1080dc1656f67f");
  // await User.deleteMany({ age: 24 });

  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  return res.status(200).json({ success: true, user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email/Password",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email/Password",
    });
  }

  return res.status(200).json({
    success: true,
    user,
  });
};
