var Queue = function() {
  var queue = Object.create(queueMethods)

  queue.count = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.enqueue =  function(value) {
    					this.storage[this.count] = value;
    					this.count++;
  					};

queueMethods.dequeue =  function() {
    					this.count--;
    					var result = this.storage[0];
    					for(let i = 0; i < this.count; i++) { 
      					this.storage[i] = this.storage[i+1]
    					}
    					if (this.count === -1) {
      					this.count = 0;
    					}
    					return result;
  					};

queueMethods.size =   function() {
    		    return this.count;
  				}


