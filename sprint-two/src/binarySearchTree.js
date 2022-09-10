var BinarySearchTree = function(value) {
  var binarySearchTree = {}
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;

  _.extend(binarySearchTree, binarySearchTreeMethods);
  return binarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
 var newChild = BinarySearchTree(value);

 if (newChild.value < this.value) {
  if (this.left === null) {
    this.left = newChild;
    return;
  } else {
    this.left.insert(value)
  }
 } else if (newChild.value > this.value) {
  if (this.right === null) {
    this.right = newChild;
    return;
  } else {
    this.right.insert(value)
  }
 }
};

binarySearchTreeMethods.contains = function(value) {
  var found = false;
  if (this.value === value) {
    found = true;
    return found;
  } else if (this.left !== null && this.value > value) {
    return this.left.contains(value);
  } else if (this.right !== null && this.value < value) {
    return this.right.contains(value);
  }
  return found;
};


binarySearchTreeMethods.depthFirstLog = function(cb) {

}





/*
 * Complexity: What is the time complexity of the above functions?
 */

