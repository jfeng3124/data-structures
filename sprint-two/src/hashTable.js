var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index);

  if (!storage) {
    storage = [];
  }
  if (storage) {
    storage.forEach(i => {
      if (i[0] === k) {
        i[1] = v;
      }
    });
  }
  storage.push([k, v]);
  this._storage.set(index, storage);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index);

  for (var i = 0; i < storage.length; i++) {
    if (storage[i][0] === k) {
      return storage[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index);

  storage.forEach(i => {
    if (i[0] === k) {
      storage.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


