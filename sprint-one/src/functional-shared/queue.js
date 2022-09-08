var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    head: 0,
    tail: 0,
    storage: {},
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size
  }
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
}

queueMethods.dequeue = function() {
  if (this.size() !== 0) {
    var value = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return value;
  }
}

queueMethods.size = function () {
  return this.tail - this.head;
}

