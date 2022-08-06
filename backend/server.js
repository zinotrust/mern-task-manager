const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const connectDB = require("./config/connectDB");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_UR)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    })
  )
  .catch((err) => console.log(err));

// connectDB();
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
