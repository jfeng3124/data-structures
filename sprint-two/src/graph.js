

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node]) {
    var neighbor = this.nodes[node];

    neighbor.forEach(edge => {
      var remove = this.nodes[edge];
      remove.splice(remove.indexOf(node), 1);
    });
  }

  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode)) {
    var fromEdge = this.nodes[toNode].indexOf(fromNode);
    var toEdge = this.nodes[fromNode].indexOf(toNode);
    this.nodes[fromNode].splice(toEdge, 1);
    this.nodes[toNode].splice(fromEdge, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


