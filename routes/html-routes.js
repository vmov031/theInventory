var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.ejs"));
  });

  app.get("/dashboard/:id", function(req, res) {
  	res.sendFile(path.join(__dirname, "../public/views/dashboard.ejs"));
  })

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/profile.ejs"));
  });  

  app.get("/inventory", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/views/inventory.ejs"));

  });

  app.get("/signup", function (req, res) {
  		res.sendFile(path.join(__dirname, "../public/views/signup.ejs"));

  });

};