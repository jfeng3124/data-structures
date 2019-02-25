var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  this.value = value;
  this.left = null;
  this.right = null;
  return tree;
};

BinarySearchTree.prototype = {

  insert: function (value) {
    if (this.value < value) {
      if (this.right) {
        this.right.insert(value);
      }
      this.right = BinarySearchTree(value);
    }

    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
      }
      this.left = BinarySearchTree(value);
    }
  },

  contains: function (value) {

  },

  depthFirstLog: function (cb) {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


