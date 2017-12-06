// Requiring models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/display-inventory", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Inventory.findAll({}).then(function(dbInventory) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbInventory);
    });
  });

};