'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.right.right = new Node(20);

// USER***** Please feel free to uncomment these 'numbers'... They will return true or false respectively.
// VVVVVVVVVVVVVV

let number = 16; // =  true - left
//let number = 45; //  = true - right
//let number = 1; // = false

function findPathWeight(root, number){
  // boolean default value = false
  let boolean = false
  function traverse(root, sum= 0){
    // setting the nonexistance of BinaryTree to default to false
    if(!root)
      return false;
    sum += root.value;
    // The meat and potatoes... We are traversing until there are no branches and we have reached the leaves of the tree.
    if(!root.left && !root.right && sum === number){
      // is the sum value = to the node value? if so return true, if not then return to default value.
      boolean = true;
    }
    // Begin Proper Traversal
    if(root.left){
      traverse(root.left, sum);
    }
    if(root.right){
      traverse(root.right, sum);
    }
  }
  traverse(tree.root);
  console.log(boolean); // This exists to see the return in replit
  return boolean; // <<< This is returning either TRUE OR FALSE
}

findPathWeight(tree, number);
