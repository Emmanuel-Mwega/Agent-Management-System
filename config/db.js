const mysql = require("mysql2");
require("dotenv").config(); // Loads the variables from your .env file

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection failed:", err.message);
  } else {
    console.log("Connected to MySQL Database via Environment Variables! 🔐");
  }
});

module.exports = db;
