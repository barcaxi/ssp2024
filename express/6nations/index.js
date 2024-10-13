var express = require("express");
var _ = require('underscore');
var cors = require('cors');  // Read https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

var teamData = require("./teams.json");
var resultData = require("./results.json");

var app = express();
app.use(cors()); // allows Cross-Origin Resource Sharing for all routes

app.get("/teams", function(req,res){   
  res.send(teamData);
});

app.get("/results", function(req,res){   
  res.send(resultData);
});

app.get("/results/:year?", function(req,res){ 
	res.send(_.where(resultData.results, {year: req.params.year}));
});


// new route to get specific team results
app.get("/results/team/:id?", function(req,res){ 
	// add your solution here
	// use _.filter()

});

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});