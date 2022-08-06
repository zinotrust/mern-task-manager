const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const logger = (req, res, next) => {
  console.log("Middleware ran");
  next();
};

// Routes
app.get("/", logger, (req, res) => {
  res.send("Welcome to the home page");
});

// Create a Task
app.post("/api/tasks", async (req, res) => {
  //   console.log(req.body);
  //   res.send("Task created");
  const task = await Task.create(req.body);
  res.status(200).json(task);
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Get all Tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

const PORT = process.env.PORT || 8000;

// Connect DB & start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    })
  )
  .catch((err) => console.log(err));
