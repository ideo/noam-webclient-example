var lemma = new Lemma('webclient', 'NoamDisplay');

lemma.hears('ball', function(name, value) {
	console.log('Ball: ', name, value);

	svg.selectAll("circle")
		.data([value])
		.attr("cx", function (d) {
      		return d.ballX;
      	})
      	.attr("cy", function (d) {
      		return d.ballY;
      	});
  //update your page here.
  //$("div#msg").append("<p>" + name + ":&nbsp;" + value +  "</p>");
});

lemma.begin('127.0.0.1', 8089);

var ball = {
	ballX: 0,
	ballY: 0,
	ballS: 0
};

var width = 960,
    height = 500;

var svg = d3.select("#pongtable").append("svg")
    .attr("width", width)
    .attr("height", height);

var ball = svg.selectAll("circle")
      .data([ball])
    .enter().append("circle")
      .attr("r", 5)
      .attr("cx", function (d) {
      	return d.ballX;
      })
      .attr("cy", function (d) {
      	return d.ballY;
      });




