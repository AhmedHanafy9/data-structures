var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    //Create new node
    var newNode = Node(value);
    //if there is no head, assign the new node to be the head
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    // If the head isn't null
    if (list.head !== null) {
      var remove = list.head.value;
      list.head = list.head.next;
      return remove;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value !== target) {
        currentNode = currentNode.next;
      } else {
      return true;
    }
    }
    return false;
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