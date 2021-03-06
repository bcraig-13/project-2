// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.post("/api/pokemon", (req, res) => {
    if (!req.user) {
      return res.status(401).end("You must be logged in.");
    }
    db.Pokemon.create({
      sprite: req.body.sprite,
      name: req.body.name,
      typeOne: req.body.typeOne,
      typeTwo: req.body.typeTwo,
      level: req.body.level,
      UserId: req.user.id
    })
      .then(() => {
        res.send("Added to db");
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/api/pokemon", (req, res) => {
    db.Pokemon.findAll({}).then(dbPokemon => {
      res.json(dbPokemon);
    });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
  });

  // Route for getting some data about our user to be used client side

  app.get("/api/all-pokemon", (req, res) => {
    db.Pokemon.findAll({}).then(dbPokemon => {
      res.json(dbPokemon);
    });
  });

  app.delete("/api/all-pokemon/:id", (req, res) => {
    db.Pokemon.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbPokemon => {
      res.json(dbPokemon);
    });
  });
  //Problem with this route???
  app.patch("/api/all-pokemon/:pokemonId", (req, res) => {
    db.Pokemon.update(req.body, {
      where: {
        id: req.params.pokemonId,
        UserId: req.user.id
      }
    }).then(dbPokemon => {
      res.json(dbPokemon);
    });
  });
};
