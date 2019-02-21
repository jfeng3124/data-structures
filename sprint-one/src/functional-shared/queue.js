var Queue = function() {
  var queue = {};

  for(var key in queueMethods) {
  	extend(queue[key], queueMethods[key])
  }
  this.count = 0;
  this.storage = {};
  return queue;
};

var queueMethods = {
  enqueue:  function(value) {
    					storage[count] = value;
    					count++;
  					},

  dequeue:  function() {
    					count--;
    					var result = storage[0];
    					for(let i = 0; i < count; i++) { 
      					storage[i] = storage[i+1]
    					}
    					if (count === -1) {
      					count = 0;
    					}
    					return result;
  					},

  size:   function() {
    		    return count;
  				}
};

function extend(obj, props) {
  for (let key in props) {
    obj[key] = props[key];
  }
}