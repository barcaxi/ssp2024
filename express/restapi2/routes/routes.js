var controller = require('../controller/controller.js');

exports.routes = function(app){

    // a chainable route handler for the route path '/team' using Express route() function 
    app.route('/team')
      .get(function (req, res) {
        // res.send('GET: a team!')

        // calls controller function
        controller.getTeams(req,res);        
      })
      .post(function (req, res) {
        res.send('POST: a team!');
      })
      .put(function (req, res) {
        res.send('PUT: a team!');
      })
      .delete(function (req, res) {
        res.send('DELETE: a team!');
      });

    // specific route handler for path '/team/id' for GET, PUT & DELETE
    app.route('/team/:id')
      .get(function (req, res) {
        res.send(`GET: team ${req.params.id}`);
      })
      .put(function (req, res) {
        res.send(`PUT: team ${req.params.id}`);
      })
      .delete(function (req, res) {
        res.send(`DELETE: team ${req.params.id}`);
      });

}
