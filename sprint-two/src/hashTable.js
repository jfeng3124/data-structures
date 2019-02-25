var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage.get(index);

  if (!container) {
    container = [];
  }
  if (container) {
    container.forEach(i => {
      if (i[0] === k) {
        i[1] = v;
      }
    });
  }
  
  container.push([k, v]);
  this._storage.set(index, container);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage.get(index);

  for (var i = 0; i < container.length; i++) {
    if (container[i][0] === k) {
      return container[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage.get(index);

  container.forEach(i => {
    if (i[0] === k) {
      container.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


