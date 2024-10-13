var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var who = {};

var app = express();

// parse request body as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./'));  // serve files in the / directory 

app.use(cors());

app.get("/who", function (req, res) {
  res.send(who);
});

app.post("/who/add", function (req, res) {
  console.log(req.body);
  who = req.body; // record who details
  res.sendStatus(202); // 202 - Accepted
});

var myServer = app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
