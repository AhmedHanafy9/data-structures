var Queue = function() {
  var head = 0;
  var tail = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++
  };

  someInstance.dequeue = function() {
    if (someInstance.size() !== 0) {
      var value = storage[head];
      delete storage[head];
      head++
      return value
    }
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
