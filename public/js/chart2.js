$(document).ready(function() {

	var favorite;

var w = 400;
var h = 400;

var dataset = {key: [], value: [28,5,10,18,40]};

var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.value.length))
        .rangeRoundBands([0, w], 0.05); 

var yScale = d3.scale.linear()
        .domain([0, d3.max(dataset.value)])
        .range([0, h-100]);

//Create SVG element
var svg = d3.select("#two")
      .append("svg")
      .attr("width", w)
      .attr("height", h + 20);

svg.append("g")
   .attr("transform", "translate(0, " + h + ")")
   .call(d3.svg.axis().orient("bottom").scale(xScale));

//Create bars
svg.selectAll("rect")
   .data(dataset.value, function(d) { return d; })
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
    return xScale(i);
   })
   .attr("y", function(d) {
    return h - yScale(d);
   })
   .attr("width", xScale.rangeBand())
   .attr("height", function(d) {
    return yScale(d);
   })
   .attr("fill", function(d) {
    return "rgb(0, 0, " + (d * 10) + ")";
   })


//Create labels
svg.selectAll("text")
   .data(dataset.value, function(d) { return d; })
   .enter()
   .append("text")
   .text(function(d) {
    return d;
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
    return xScale(i) + xScale.rangeBand() / 2;
   })
   .attr("y", function(d) {
    return h - yScale(d) -5;
   })
   .attr("font-family", "sans-serif") 
   .attr("font-size", "11px")
   .attr("fill", "black");
   
$.get("/api/dashboard", function (data){
	console.log("Favorite items:" + data);
		favorite = data;
	});

}