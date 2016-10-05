var Cats = function() {

};

Cats.prototype.all = function() {
  var url = "http://localhost:3000/api/cats";
  makeRequest( url, function( callback ) {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var results = JSON.parse( jsonString );
    var cats = populateCats( results );

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