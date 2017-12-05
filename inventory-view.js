function listProducts () {
	var query = "SELECT * FROM inventory;"
		connection.query(query, function(err, res) {
	for (var i = 0; i < res.length; i++) {
		console.log(
			"Id: " + res[i].id + 
	      	"||" +
	      	"Product: " + res[i].product_name + 
	      	"||" +
	      	"Department: " + res[i].department_name + 
	      	"||" +
	      	"Price: $" + res[i].price + ".00 " +
	      	"||" +
			"Stock Quantity: " + res[i].stock_quantity
		);