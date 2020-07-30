const mysql = require("mysql2");

var db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "store_project",
  password: "15061992",
});

module.exports = db.promise();
