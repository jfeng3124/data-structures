var LinkedList = function() {
  
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if (list.head === null) {
      list.tail = node;
      list.head = node;
    } 
    list.tail.next = node; 
    list.tail = node;
  };

  list.removeHead = function() {
    var headNode = list.head.value; 
    list.head = list.head.next; 

    return headNode;
  };

  list.contains = function(target) {

    var findTarget = function(node) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      node = node.next;
      return findTarget(node);
    };
    return findTarget(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
