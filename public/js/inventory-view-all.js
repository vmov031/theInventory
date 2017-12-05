$(document).ready(function() {

    function listInventory() {
        var query = "SELECT * FROM inventory;"
        connection.query(query, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log(
                    "\nId: " + res[i].id +
                    "||" +
                    "Product_Name: " + res[i].product_name +
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
            }

        }); //end: query function
    } //end: listProducts function

listInventory()

});