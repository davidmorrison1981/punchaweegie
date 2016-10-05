var express = require('express');
var app = express();
var path = require('path');
var CatApi = require('./cat-api/catApi')


app.listen(3000, function(){
  new CatApi(app);
  console.log("app running this is als")
});