'use strict';

//Node and Binary Tree classes and constructors
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    const values = [];
    const preOrder = (node) => {
      //current -> left -> right
      values.push(node.value);
      if (node.left) {
        preOrder(node.left);
      }
      if (node.right) {
        preOrder(node.right);
      }
    };
    let current = this.root;
    preOrder(current);
    return values;
  }
}

function treeIntersection(tree1, tree2) {
  let treeOneArray = tree1.preOrder();
  let treeTwoArray = tree2.preOrder();
  let results = [];

  for(let i = 0; i < treeOneArray.length; i++){
    if(treeOneArray[i] === treeTwoArray[i]){
      results[results.length] = treeOneArray[i];
    }
  }
  return results;
}

module.exports = {
  Tree,
  Node,
  treeIntersection,
};
