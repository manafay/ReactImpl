var React = require('./react');

 var render = function(reactElement, container){
  return container.innerHTML = reactElement;
};




// Output test

var className = {className: "react", id: "react-native"};
var child1 = React.createElement('li', null, 'Welcome to the world of React');
var child2 = React.createElement('li', null, 'Build Resuable components');
var root = React.createElement('h1', className, child1, child2);
render(root, document.getElementById('example'));
