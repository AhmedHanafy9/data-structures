// _ = require("underscore");

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {'edges':[]};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return this.storage[node]
  return !!this.storage[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgesToRemoveFrom = this.storage[node]['edges'];
  var storage = this.storage
  _.each(edgesToRemoveFrom, function(item){
    storage[item]['edges'].splice(_.indexOf(node), 1);
  });

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode]['edges'].includes(toNode)
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[fromNode]['edges'].push(toNode);
    this.storage[toNode]['edges'].push(fromNode);
  };
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.storage[fromNode]['edges'].includes(toNode)) {
    this.storage[fromNode]['edges'].splice(_.indexOf(toNode), 1);
    this.storage[toNode]['edges'].splice(_.indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this.storage);
  _.each(nodes, function(node){
    cb.apply(node, arguments)
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = Graph()
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
// console.log(graph.hasEdge(4, 5)) // true
graph.removeNode(5);
// console.log(graph.hasEdge(4, 5)) // false
// console.log(graph.removeNode(5))
