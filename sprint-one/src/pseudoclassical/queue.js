var Queue = function() {
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue =  function(value) {
    					this.storage[this.count] = value;
    					this.count++;
  					};

Queue.prototype.dequeue =  function() {
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

Queue.prototype.size =   function() {
    		    return this.count;
  				}


