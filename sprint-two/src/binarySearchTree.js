var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype = {

  insert: function (value) {

    if (this.value < value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = BinarySearchTree(value);
      }
    }

    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = BinarySearchTree(value);
      }
    }
  },

  contains: function (value) {

    if (this.value === value) {
      return true;
    }
    if (this.value < value) {
      if (this.right) {
        return this.right.contains(value);
      }
      return false;
    }
    if (this.value > value) {
      if (this.left) {
        return this.left.contains(value);
      }
      return false;
    }
  },

  depthFirstLog: function (cb) {
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


