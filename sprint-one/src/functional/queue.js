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
    if (count === 0) {
      return 0;
    }
    count--;
    //iterate over the storage
    //we want to delete the 0 index of the object
    //return what is being deleted
    for(var key in storage) {
      var result = storage[key];
      console.log('before storage[key] '+ storage[0])
      delete result;
      console.log('after delete ' + result)
      console.log('after delete result ' + storage[key])
      return storage[key];
    }
    // for (var key in storage) {
    //   var result = storage[key]
    //   delete result;
    //   console.log('storage[key]', result)
    //   return storage[key]
    // }
    // var result = storage[0];
    // console.log(storage[0])
    // delete result;
    // return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
