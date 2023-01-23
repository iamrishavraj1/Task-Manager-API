const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
//mongodb+srv://iamrishavraj1:<password>@cluster0.vr2jeyv.mongodb.net/?retryWrites=true&w=majority