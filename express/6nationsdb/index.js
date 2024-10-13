var express = require("express");
var _ = require('underscore');
var bodyParser = require("body-parser");
var cors = require("cors");

var teams = require('./model/teams');
var resultData = require("./results.json");

var app = express();
app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/teams", function(req,res){
	teams.getTeams(req,res);
});

app.get("/results", function(req,res){
	res.send(resultData);
});

app.get("/results/:year?", function(req,res){
	res.send(_.where(resultData.results,{year: req.params.year}));
});

app.post("/teams/add", function(req,res){	
	console.log(req.body);
	teamData.teams.push(req.body);
	res.send(202);
});

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});