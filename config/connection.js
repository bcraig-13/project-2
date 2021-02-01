//mysql dependency
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  //connection to link to mysql workbench
} else {
  connection = mysql.createConnection({
    host: "localhost",
    // port
    port: 3306,
    // MySQL username
    user: "root",
    password: "whatitDo2You",
    // Name of database
    database: "pokebase"
  });
}
//create a connection
connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
