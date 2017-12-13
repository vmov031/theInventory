$(document).ready(function() {
  // Getting references to our form and input
  var productID = $(".product-id");
  var quantityInput = $(".quantity");
   var month = $(".month");
  var date = $(".date");
  var year = $(".year");
  // Our new orders will go inside the orderContainer
  var orderContainer = $(".order-container");
  // Adding event listeners for receive and send items
  $(orderForm).on("submit", ".receive", handleReceiveOrder);
  $(orderForm).on("submit", ".send", handleSendOrder);

  // Our initial orders array
  var orderHistory = [];

  function handleReceiveOrder(event) {
    event.preventDefault();
    // Wont submit the order if we are missing product-id, quantity month , date and year
    if (!productID.val().trim() || !quantityInput.val().trim() || !month.val()  || !date.val()  || !year.val()) {
      return;
    }
    else {
      receiveOrder();
    }
  }

  function handleSendOrder(event) {
    event.preventDefault();
     // Wont submit the order if we are missing product-id, quantity month , date and year
    if (!productID.val().trim() || !quantityInput.val().trim() || !month.val()  || !date.val()  || !year.val()) {
      return;
    }
    else {
      sendOrder();
    }
  } 

  // This function increase the quantity in our database
  function receiveOrder(quantityInput) {
    $.ajax({
      method: "PUT",
      url: "/orders",
      data: orderHistory
    }).then(function() {
     var newQuantity = quantity.val(data.quantity) - quantityInput;
    }).done(createNewRow);
  }

  // This function decrease the quantity in our database
  function sendOrder(quantityInput) {
    $.ajax({
      method: "PUT",
      url: "/orders",
      data: orderHistory
    }).done(createNewRow);
  }

// This function constructs an orderHistory-item row
  function createNewRow(orderHistory) {
    $(".order-container").append( "<li class='list-group-item order-item'>" + orderHistory.productID +" "+ orderHistory.quantityInput + " "+ orderHistory.month + " " + orderHistory.date + " " + orderHistory.year + "</li>")

  }

  $("#search-btn").on("click", function() {

  // save the character they typed into the character-search input
  var searchedItem = $("#item-serach").val().trim();

  // replace any spaces between that character with no space
  // (effectively deleting the spaces). Make the string lowercase
  searchedItem = searchedItem.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
   $.get("/api/" + searchedItem, function(data) {
    // log the data to our console
    console.log(data);
    //empty to well-section before adding new content
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
      $("#well-section").append("<h2> The force is not strong with this one. Your character was not found. </h2>");
    }
    // otherwise
    else {
      // append the character name
      $("#well-section").append("<h2>" + data.name + "</h2>");
      // the role
      $("#well-section").append("<h3>Role: " + data.role + "</h3>");
      // the age
      $("#well-section").append("<h3>Age: " + data.age + "</h3>");
      // and the force points
      $("#well-section").append("<h3>Force Points: " + data.forcePoints+ "</h3>");
    }

  });

});

  });