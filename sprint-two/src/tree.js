// _ = require("underscore")

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
// create a var child, set its value to function(value)
var newChild = Tree(value);
// push newChild to the arr we created
this.children.push(newChild);
};

treeMethods.contains = function(target) {
  // create variable to store values
  var tempArray = [];
  // iterate over nodes of the tree
  _.each(this.children, function(obj) {
    tempArray.push(obj.value);

    // conditional statement where if obj.children.length is not equal to 0
      // push obj.children[0].value to the temparray
    if (obj.children.length !== 0) {
      tempArray.push(obj.children[0].value)
    }
  });
  // return t/f if tempArray includes value
  if (tempArray.includes(target)) {
    return true;
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




