$(document).ready(function() {

	var totalInventory = 0;
	var totalOrders;
	var totalDelieveries;

$.get("/api/total", function (data){
    
    for (var i = 0; i < data.length; i++) {
            totalInventory += parseFloat(data[i].quantity);
             
          }

          console.log(totalInventory);

    $("#stock").text(totalInventory);
  });

// $.get("home/api/dashboard", function (data){
//   console.log("Favorite items:" + data);
//     totalOrders = data;
//     $("#received")
//   });

// $.get("home/api/dashboard", function (data){
//   console.log("Favorite items:" + data);
//     totalDelieveries = data;
//     $("#delivered")
//   });


});