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
    					this.storage[this.count] = value;
    					this.count++;
  					},

  dequeue:  function() {
    					this.count--;
    					var result = this.storage[0];
    					for(let i = 0; i < this.count; i++) { 
      					this.storage[i] = this.storage[i+1]
    					}
    					if (this.count === -1) {
      					this.count = 0;
    					}
    					return result;
  					},

  size:   function() {
    		    return this.count;
  				}
};

function extend(obj, props) {
  for (let key in props) {
    obj[key] = props[key];
  }
}