class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {},
    this.stackIndex = 0
  };

  push(value) {
    this.storage[this.stackIndex] = value;
    this.stackIndex++;
  };

  pop() {
    if (this.stackIndex > 0) {
      this.stackIndex--;
      var value = this.storage[this.stackIndex];
      delete this.storage[this.stackIndex];
      return value;
    }
  };

  size() {
    return this.stackIndex;
  };
}
