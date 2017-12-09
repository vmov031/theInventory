// Requiring models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/inventory-view-all", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Inventory.findAll({}).then(function(dbInventory) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbInventory);
    });
  });

    app.get("/api/dashboard", function(req, res) {
    // findAll returns all entries in a specific 
    db.Inventory.findAll({
    	where: {
    		id: [2,4]
      
    	},
    }).then(function(data) {

      res.json(data);
    });
  });

};