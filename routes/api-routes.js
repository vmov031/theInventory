// Requiring models
var db = require("../models");

var total = 0;

// Routes
// =============================================================
module.exports = function(app) {

        // GET route for getting all of the todos
        app.get("home/api/inventory", function(req, res) {
            // findAll returns all entries for a table when used with no options
            db.Inventory.findAll({}).then(function(dbInventory) {
                // We have access to the todos as an argument inside of the callback function
                res.json(dbInventory);
            });
        });

        app.get("home/api/favorites", function(req, res) {
            // findAll returns all entries in a specific 
            db.Inventory.findAll({
                where: {
                    id: [2, 4]

                },
            }).then(function(data) {
                res.json(data);
            });
        });

        app.get("home/api/low", function(req, res) {
          db.Inventory.findAll({
            where: {
              quantity: {
                $lte: 80,
                        }
                    }
                    }).then(function(data) {
                        res.json(data);
                    });

                });
        app.get("/api/total", function(req, res) {

          db.Inventory.findAll({}).then(function(data) {
            res.json(data);
            console.log(data);
        
        });
    });

    // For user info in sidebar
    app.get("/api/user", function(req, res) {
        console.log("session ID: " + req.session.id);
        db.User.findOne({
            where: {
                id: req.session.id
            }
            // DO WE NEED THIS?
        }).then(function(dbUser) {
            console.log("dbUser: " + dbUser);
            res.json(dbUser);
        });
    });

};