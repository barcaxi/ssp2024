var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");

// Initialise and Setup

var messages = [];  // use to store message objects
var app = express();

app.use(express.static('public'));  // serve files in directory named "public"


app.use(cors()); // allows Cross-Origin Resource Sharing for all routes

// need both to send JSON object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



// Routes

app.get("/get", function(req,res){   
  res.send(messages);
});

app.post("/message", function(req,res){   
	console.log(req.body);
	messages.unshift(req.body);
});



// Run Server

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});