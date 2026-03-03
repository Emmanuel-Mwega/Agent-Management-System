const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456qwerty111@",
  database: "apartment_management",
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection failed");
  } else {
    console.log("Connected to My SqlDatabase");
  }
});

module.exports = db;
