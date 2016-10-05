var CatApi = function( app ) {

  var cats = [
  {
    name: "James",
    breed: "Siamese"
  },
  {
    name: "Nizmo",
    breed: "Bengal"
  },
  {
    name: "Bagpuss",
    breed: "stuffed"
  }
  ];

  app.get("/api/cats", function(req, res){
    res.json(cats);
  });

}

module.exports = CatApi;