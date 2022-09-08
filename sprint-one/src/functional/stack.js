var Stack = function() {
  var stackIndex = 0;
  var someInstance = {
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackIndex] = value;
    stackIndex++;
  };

  someInstance.pop = function() {
    if (stackIndex > 0) {
      stackIndex--;
      var value = storage[stackIndex]
      delete storage[stackIndex]
      return value;
    }
  };

  someInstance.size = function() {
    return stackIndex;

  };

  return someInstance;
};





