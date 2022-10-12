const express = require("express");
const router = express.Router();
const {
  storeUser,
  fetchAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  login,
} = require("../controller/user");
/*
// /user POST
// /user GET
// /user/:id Get 
// /user/:id Patch
// /user/:id DELETE
*/
router.post("/user", storeUser);

router.post("/user/login", login);

router.get("/user", fetchAllUser);

router.get("/user/:id", getSingleUser);

router.patch("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

module.exports = router;
