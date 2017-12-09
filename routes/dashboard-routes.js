
var db = require("../models");

module.exports = function(app) {

app.get("/api/dashboard", function (req, res) {

	db.Inventory.findAll({
		where: {
			id: {
				[Op.or]: [{a: 5}, {a: 6}]
			},
			attributes: {
				["description", "quantity"]
			},
			},
	}).then(function(result) {
		res.json(result)
	});

});



var db = require("../models");


module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/dashboard", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Inventory.findAll({
    	where: {
    		id: {
    		[Op.or]: [{a: 5}, {a: 6}]
    	},
    		attributes: {
    			["description", "quantity"]
    		},
    	},
    }).then(function(res) {
      // We have access to the todos as an argument inside of the callback function
      res.json(res);
    });
  });
<<<<<<< HEAD

=======
>>>>>>> 0d2bab9d73ef0af0f6bace27f1662aff340c8c9b

};