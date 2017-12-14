$(document).ready(function() {

    getUser();

    // Function for retrieving authors and getting them ready to be rendered to the page
    // NEED TO CHECK ROUTE
    function getUser() {
        $.get("/api/user", userData)
            .then(insertUserInfo;)
    }


    // THIS GOES IN THE API-ROUTES
    app.post("/api/user", function(req, res) {
        db.User.findOne({
            where: {
                id = req.session.id
            },
            // DO WE NEED THIS?
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

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
    }


});