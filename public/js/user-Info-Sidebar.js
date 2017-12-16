$(document).ready(function() {

    getUser();

    // Function for retrieving authors and getting them ready to be rendered to the page
    // NEED TO CHECK ROUTE
    function getUser() {
    	console.log("If you see this, then the getUser() is working");
        $.get("/api/user")
            .then(function(userInfo){
            	insertUserInfo(userInfo);
            	// console.log("userInfo: " + userInfo);
            });
            
    }


    // Function inserting user info into sidebar.ejs
    function insertUserInfo(userData) {
        for (var i = 0; i < userData.length; i++) {
            $(".user-info-container").html(
                "<center>" +
                "<h1><span id='first-name'>" + userData[1].first_name + "</span></h1>" +
                "<h3><span id='last-name'>" + userData[1].last_name + "</span></h3>" +
                "<p>position: <span id='position'><strong>" + userData[1].position + "</strong></span></p>" +
                "<p>username: <span id='username'><strong>" + userData[1].user_name + "</strong></span></p>" +
                "</center>"
            );
        };
        // console.log("userData: " + userData);
    };
});