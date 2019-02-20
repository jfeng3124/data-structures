class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	var stack = {};
  	var push = function(string) {
  		count = 0;
  		for (let key in stack) {
  			key = count;
  			stack[key] = this.stack.push(string);
  			count++;
  		}
  		return stack;
  	}
  	var pop = function() {
  	  for (let key in stack) {
  	    return stack[key].pop()
  	  }
  	}
  	var size = stack.length
  }
}