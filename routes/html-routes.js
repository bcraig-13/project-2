// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/all-pokemon");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/all-pokemon");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/all-pokemon", isAuthenticated, (req, res) => {
    //get all pkmn from db
    db.Pokemon.findAll({
      where: {
        UserId: req.user.id
      },
      raw: true
    }).then(dbPokemon => {
      res.render("all-pokemon", {
        username: req.user.username,
        pokemons: dbPokemon
      });
    });
    //
  });

  app.get("/add-pokemon", isAuthenticated, (req, res) => {
    res.render("add-pokemon", { username: req.user.username });
  });

  app.get("/add-pokemon", isAuthenticated, (req, res) => {
    res.render("add-pokemon", { username: req.user.username });
  });
};
