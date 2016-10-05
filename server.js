var express = require('express');
var app = express();
var path = require('path');
var CatApi = require('./cat-api/catApi')

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});


app.listen(3000, function(){
  new CatApi(app);
  console.log("app running this is als")
});