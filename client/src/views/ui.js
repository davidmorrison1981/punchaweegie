var UI = function(){
 var cats = require('../seeds');
 cats.forEach(function(cat){
  this.render(cat)
 }.bind(this));
}

UI.prototype = {
  render: function(cat){
    var container = document.querySelector('#cats');

    for(var i=0; i<cats.length; i++){
      var li = document.createElement('li');
      li.innerText('Name:', cat.name);
      container.appendChild(li);
    }
  }
}
