var Stack = function() {
  this.storage = {};
  this.count = 0;
  this.push = function(value) {
          this.storage[this.count] = value;
    	    this.count++;
  		  };

	this.pop = function() {
    		  if (this.count === 0) {
      			this.count = 0;
    	    }
    			this.count--;
    			var result = this.storage[this.count];
    			delete this.storage[this.count];
    			return result;
        };
	this.size = function() {
    			return this.count
  			}

};


