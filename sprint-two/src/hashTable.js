var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }

};

HashTable.prototype.insert = function(k, v) {
  // to insert into a hash, we need the index of the array in the bucket
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    }
  }
  bucket.push([k,v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1)
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */




