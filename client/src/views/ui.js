var Cats = require('../models/cats.js')

var UI = function(){
 var cats = new Cats();
 cats.all(function(cats){
  this.render(cats);
 }.bind(this));
}

UI.prototype = {
  render: function(cats){
    console.log( cats );
    var container = document.querySelector('#cats');

    for(var i=0; i<cats.length; i++){
      var cat = cats[i];
      var li = document.createElement('li');
      li.innerText = 'Name: ' + cat.name + " "+'Breed: ' + cat.breed;
      
      container.appendChild(li);
    }
  }
}

module.exports = UI;
