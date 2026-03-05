const express = require("express");
const db = require("./config/db.js");
require("dotenv").config(); // 1. Load the .env variables here too!

const app = express();

// 2. Middleware to handle JSON (Crucial for Login/Register later)
app.use(express.json());

// 3. Use the Port from .env OR default to 5000
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
