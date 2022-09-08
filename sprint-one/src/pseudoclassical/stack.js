var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackIndex = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.stackIndex] = value;
  this.stackIndex++;
};

Stack.prototype.pop = function() {
  if (this.stackIndex > 0) {
    this.stackIndex--;
    var value = this.storage[this.stackIndex];
    delete this.storage[this.stackIndex];
    return value;
  }
};

Stack.prototype.size = function() {
  return this.stackIndex;
}
