var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    stackIndex: 0,
    storage: {},
    push: stackMethods.push,
    pop: stackMethods.pop,
    size: stackMethods.size
  }
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.stackIndex] = value;
  this.stackIndex++;
}

stackMethods.pop = function() {
  if (this.stackIndex > 0) {
    this.stackIndex--;
    var value = this.storage[this.stackIndex];
    delete this.storage[this.stackIndex];
    return value;
  }
}

stackMethods.size = function() {
  return this.stackIndex
};


