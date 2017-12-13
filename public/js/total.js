$(document).ready(function() {

	var totalInventory = 0;
	var totalOrders;
	var totalDelieveries;

$.get("home/api/dashboard", function (data){
  console.log("Favorite items:" + data);
    totalInventory = data;
    
    for (var i = 0; i < data.length; i++) {
            totalInventory += parseFloat(data[i].quantity);
             
          }

    $("#stock").text(totalInventory);
  });

$.get("home/api/dashboard", function (data){
  console.log("Favorite items:" + data);
    totalOrders = data;
    $("#received")
  });

$.get("home/api/dashboard", function (data){
  console.log("Favorite items:" + data);
    totalDelieveries = data;
    $("#delivered")
  });


}