const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;

// db
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  pasword: "1234",
  database: "bbs",
});

app.get("/", (req, res) => {
  const sqlQuery =
    "INSERT INTO simpleboard (title, content) VALUES('μΈμμ', 'sex')";
  db.query(sqlQuery, (err, result) => {
    res.send("success");
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
