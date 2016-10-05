var Cats = require('../models/cats.js')

var UI = function(){
 var cats = new Cats();
 cats.all(function(cat){
  this.render(cat);
 }.bind(this));
}

UI.prototype = {
  render: function(cat){
    console.log( cat );
    var container = document.querySelector('#cats');

    for(var i=0; i<cats.length; i++){
      var li = document.createElement('li');
      li.innerText('Name:', cat.name);
      container.appendChild(li);
    }
  }
}

module.exports = UI;
