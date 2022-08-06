const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(taskRoutes);

const logger = (req, res, next) => {
  console.log("Middleware ran");
  next();
};

// Routes
app.get("/", logger, (req, res) => {
  res.send("Welcome to the home page");
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
