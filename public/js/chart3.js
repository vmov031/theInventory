$(document).ready(function() {

$.get("/api/dashboard", function (data){
	console.log("Favorite items:" + data);
		favorite = data;
	});
}