/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	 var render = function(reactElement, container){
	  return container.innerHTML = reactElement;
	};




	// Output test

	var className = {className: "react", id: "react-native"};
	var child1 = React.createElement('li', null, 'Welcome to the world of React');
	var child2 = React.createElement('li', null, 'Build Resuable components');
	var root = React.createElement('h1', className, child1, child2);
	render(root, document.getElementById('example'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	var fetchChildren = function(child){
	  result = "\n";
	  for(var x in child){
	    result += child[x] + "\n";
	  }
	  return result;
	};

	var getAttributes = function(attr){
	  result = "";
	  for(var key in attr){
	    if(attr.hasOwnProperty(key)){
	      result += " " + key + "=" + "\"" +attr[key] + "\"";
	    }
	  }
	  return result;
	};

	var createElement = function(tag, props, ...args){
	  return "<" + tag + getAttributes(props) + ">" + fetchChildren(args) + "</" + tag + ">";
	};

	module.exports = {
	  createElement: createElement
	};


/***/ }
/******/ ]);