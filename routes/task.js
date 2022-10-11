const express = require("express");
const router = express.Router();
const {
  storeTask,
  fetchAllTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controller/task");
/*
// /task POST
// /task GET
// /task/:id Get 
// /task/:id Patch
// /task/:id DELETE
*/

router.post("/task", storeTask);

router.get("/task", fetchAllTask);

router.get("/task/:id", getSingleTask);

router.patch("/task/:id", updateTask);

router.delete("/task/:id", deleteTask);

module.exports = router;
