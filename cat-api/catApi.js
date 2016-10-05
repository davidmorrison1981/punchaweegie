var CatApi = function( app ) {

  var cats = require( '../seeds');

  app.get("/api/cats", function(req, res){
    res.json(cats);
  });

}

module.exports = CatApi;