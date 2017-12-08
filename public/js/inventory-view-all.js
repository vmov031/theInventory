$(document).ready(function() {
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,

//   user: "root",

//   password: "Calamigos2015",
//   database: "tropical_inventory"
// });

var inventoryContainer = $(".container");
var columnSelect = $("")
var url = window.location.search;
var product_code;

function getItems(product_code) {
    product_code = product_code || "";
    if (product_code) {
        product_code = "/?product_code=" + product_code;
    }
    $.get("/api/inventory-view-all" + product_code, function(data) {
        console.log("product_code", data);
        product_code = data;
        if (!product_code || !product_code.length) {
            displayEmpty(product_code);
        }
        else {
            // isolate data here
        }
    });
}
    function listInventory(data) {

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