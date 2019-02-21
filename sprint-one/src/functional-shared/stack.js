var Stack = function() {
  var someInstance = {};
  extend(someInstance, stackMethods)
  
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var stackMethods = {
	push: function(value) {
          this.storage[this.count] = value;
    	    this.count++;
  		  },

  pop:  function() {
    		  if (this.count === 0) {
      			return 0;
    	    }
    			this.count--;
    			var result = this.storage[this.count];
    			delete this.storage[this.count];
    			return result;
        },

  size: function() {
    			return this.count
  			}
};


