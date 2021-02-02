const db = require("../models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Reset Database");
  db.sequelize.close();
});
