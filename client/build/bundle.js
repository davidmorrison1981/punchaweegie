/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function() {
	  new UI();
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Cats = __webpack_require__(2)
	
	var UI = function(){
	 var cats = new Cats();
	 cats.all(function(cat){
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


/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map