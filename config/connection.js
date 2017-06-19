// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    development: {
      port: 3306,
      host: "localhost",
      user: "root",
      password: "",
      database: "burgers_db"
    },
    production: {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  // console.log("connected at port " + port);
});

// Export connection for our ORM to use.
module.exports = connection;
