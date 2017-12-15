$(document).ready(function() {

    getUser();

    // Function for retrieving authors and getting them ready to be rendered to the page
    // NEED TO CHECK ROUTE
    function getUser() {
    	console.log("is this working?");
        $.get("/api/user")
            .then(function(userInfo){
            	insertUserInfo(userInfo);
            	console.log(userInfo);
            });
            
    }


    // Function inserting user info into sidebar.ejs
    function insertUserInfo(userData) {
        $(".user-info-container").html(
            "<center>" + 
            "<h1><span id='first-name'>" + userData.first_name + "</span></h1>" +
            "<h3><span id='last-name'>" + userData.last + "</span></h3>" +
            "<p>position: <span id='position'><strong>" + userData.position + "</strong></span></p>" +
            "<p>username: <span id='username'><strong>" + userData.username + "</strong></span></p>" + 
            "</center>"
        );
        console.log(userData);
    };
});