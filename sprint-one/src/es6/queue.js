class Queue {
  constructor() {
  this.count = 0;
  this.storage = {};
  }
	enqueue (value) {
    					this.storage[this.count] = value;
    					this.count++;
  					};

	dequeue () {
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

	size () {
    		    return this.count;
  				}

}
