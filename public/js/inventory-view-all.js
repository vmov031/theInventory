$(document).ready(function() {

// var inventoryContainer = $(".container");
// var columnSelect = $("")
// var url = window.location.search;
// var product_code;

// var Inventory = {
//     product_code: product_code.val().trim(),
//     description: description.val().trim(),
//     SF_Box: SF_Box.val().trim(),
//     dimension: dimension.val().trim(),
//     quantity: quantity.val().trim(),
//     total: total.val().trim()
// };

// console.log(Inventory);

// Inventory.findAll({
//     where:{id: id},
//     attributes: ['product_code', 'description', 'SF_Box', 'dimension', 'quantity', 'total']

// console.log(data);
// res.render('inventory-view-all', {data: data})
// });


// function getItems(product_code) {
//     product_code = product_code || "";
//     if (product_code) {
//         product_code = "/?product_code=" + product_code;
//     }
//     $.get("/api/inventory-view-all" + product_code, function(data) {
//         console.log("product_code", data);
//         product_code = data;
//         if (!product_code || !product_code.length) {
//             displayEmpty(product_code);
//         }
//         else {
//             // isolate data here
//         }
//     });
// }

var inventory; 

function listInventory() {

        $.get("/api/inventory", function (data) {
            console.lo("items: " + data);
            inventory = data;
             // product_code.val(data.product_code),
             // description.val(data.description),
             // SF_Box.val(data.SF_Box),
             // dimension.val(data.dimension),
             // quantity.val(data.quantity),
             // total.val(data.total)
        })
   
    } 
listInventory()

// });