var teamData = require("../model/teams.json");

exports.getTeams = function(req,res){
    res.send(teamData);
}

// and other controller functions
