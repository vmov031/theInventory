$(document).ready(function() {

	var favorite;
$.get("/api/dashboard", function (data){
	console.log("Favorite items:" + data);
		favorite = data;
	});

}