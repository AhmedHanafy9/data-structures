var BinarySearchTree = function(value) {
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;

  _.extend(binarySearchTree, binarySearchTreeMethods);

  return binarySearchTree;
};

// binarySearchTreeMethods object
var binarySearchTreeMethods = {};


// An insert method that takes a value and adds to tree in the right position
binarySearchTreeMethods.insert = function(value) {
  // Create new instance
  var newChild = BinarySearchTree(value);
  // Compare the value of new instance to the value of this
    if (this.value > value) {
      if (this.left === null) {
        this.left = newChild;
        return;
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if (this.right === null) {
        this.right = newChild;
        return;
      } else {
        this.right.insert(value);
      }
    }
}

// a contains method that takes a value and returns a boolean whether or not the tree contains the value
binarySearchTreeMethods.contains = function(value) {
//found variable set to false by default
  var found = false;
  // if the value is equal to the value of the current node
    // reassign found to true
    //return found
    // else if the current node has a left child and the value is less than that of the current node
      //recurse
  if (value === this.value) {
    found = true;
  } else if (this.left !== null && this.value > value) {
    return this.left.contains(value);
  } else if (this.right !== null  && this.value < value) {
    return this.right.contains(value);
  }
  return found;
}

// a depthFirstLog method that takes a cb and executes it on every value in the tree
binarySearchTreeMethods.depthFirstLog = function(cb) {
  // {"value":2,"left":null,"right":{"value":3,"left":null,"right":null}}
  // this.value --> 2
  // cb(this.value)
  // return depthFirstLog()



  // cb(this.value)
  // if this.left !== null, recurse this.left.depthFirstLog(value)
  // if this.right !== null, recurse ....

  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions? O(log n) in average case, O(n) worst case.
 */

