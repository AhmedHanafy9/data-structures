var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    stackIndex: 0,
    storage: {}
  }
  _.extend(instance, stackMethods)
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.stackIndex] = value;
    this.stackIndex++;
  },
  pop: function() {
    if (this.stackIndex > 0) {
      this.stackIndex--;
      var value = this.storage[this.stackIndex];
      delete this.storage[this.stackIndex];
      return value;
    }
  },
  size: function() {
    return this.stackIndex
  }
};



