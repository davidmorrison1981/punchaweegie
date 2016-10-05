var Cat = require('./cat');

var Cats = function() {

};

Cats.prototype.all = function( callback ) {
  var url = "http://localhost:3000/api/cats";
  var self = this;
  this.makeRequest( url, function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var results = JSON.parse( jsonString );
    var cats = self.populateCats( results );

    callback( cats );
  })
}

Cats.prototype.populateCats = function( results ) {
  var cats = [];
  for( var i = 0; i < results.length; i++ ){
    var result = results[i];
    cats.push( new Cat( result ) );
  }
  return cats;
}

Cats.prototype.makeRequest = function( url, callback ) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

module.exports = Cats;