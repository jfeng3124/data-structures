var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    count--;
    var result = storage[0];
    for(let i = 0; i < count; i++) { 
      storage[i] = storage[i+1]
    }
    if (count === -1) {
      count = 0;
    }
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
