var Cats = function() {

};

Cats.prototype.all = function() {
  var url = "http://localhost:3000/api/cats";
  this.makeRequest( url, function( callback ) {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var results = JSON.parse( jsonString );
    var cats = this.populateCats( results );

    callback( cats );
  }.bind(this))
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