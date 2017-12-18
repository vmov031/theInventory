$(document).ready(function() {

    var totalInventory = 0;
    var totalOrders = 0;
    var totalDelieveries = 0;

    $.get("/api/total", function(data) {

        for (var i = 0; i < data.length; i++) {
            totalInventory += parseFloat(data[i].quantity);

        }

        $("#stock").text(totalInventory);
    });

    $.get("/api/incoming", function(response) {
        totalOrders = response.length;
        $("#received").text(totalOrders);

    });

    $.get("/api/outgoing", function(response) {
        totalDelieveries = response.length;
        $("#delievered").text(totalDelieveries);
    });


});