exports.routes = function(app){

    // a chainable route handler for the route path '/team' using Express route() function 
    app.route('/team')
      .get(function (req, res) {  // get list of teams
        res.send('GET: a team!')
      })
      .post(function (req, res) { // create a new team
        res.send('POST: a team!')
      });

    // specific route handler for path '/team/id' for GET, PUT & DELETE
    app.route('/team/:id')
      .get(function (req, res) { // get a specific team
        res.send(`GET: team ${req.params.id}`);
      })
      .put(function (req, res) { // update a specific team
        res.send(`PUT: team ${req.params.id}`);
      })
      .delete(function (req, res) { // delete a specific team
        res.send(`DELETE: team ${req.params.id}`);
      });

}
