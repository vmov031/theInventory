// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route 
  app.get("/", function(req, res) {

  });

  // POST route 
  app.post("/registration", function(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.passwowrd;
  });

  // DELETE route 

  app.delete("/api/todos/:id", function(req, res) {


  });

  // PUT route
  app.put("/api/todos", function(req, res) {

  });

};
