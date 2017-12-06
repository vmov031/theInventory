$(document).ready(function() {
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,

//   user: "root",

//   password: "Calamigos2015",
//   database: "tropical_inventory"
// });



module.exports = function (app) {
    function listInventory() {
        var query = "SELECT * FROM inventory;"
        connection.query(query, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log(
                    "\nId: " + res[i].id +
                    "||" +
                    "Product Code: " + res[i].product_code +
                    "||" +
                    "Description: " + res[i].description +
                    "||" +
                    "SF_Box" + res[i].SF_Box +
                    "||" +
                    "Dimensions: " + res[i].dimensions +
                    "||" +
                    "Quantity: " + res[i].quantity +
                    "||" +
                    "Total: " + res[i].total
                );

                $(".inventory-container > tbody").prepend("<tr><td>" + res[i].product_code + 
                    "</td><td>" + res[i].description + 
                    "</td><td>" + res[i].SF_Box + 
                    "</td><td>" + res[i].dimensions + 
                    "</td><td>" + res[i].quantity + 
                    "</td><td>" + res[i].total + 
                    "</td></tr>");
            }

        }); //end: query function
    } //end: listProducts function
listInventory()

// });