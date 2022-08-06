const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");
const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.get("/api/tasks", getTasks);
router.post("/api/tasks", createTask);
router.get("/api/tasks/:id", getTask);
router.delete("/api/tasks/:id", deleteTask);
router.put("/api/tasks/:id", updateTask);

module.exports = router;
