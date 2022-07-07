'use strict';

console.log('please add');

const { tree, node } = require('./binarytree15');

const newTree = new tree();
const nodeOne = new node(2);

newTree.root = nodeOne;

const nodeTwo = new node(7);
newTree.root.left = nodeTwo;

const nodeThree = new node(5);
newTree.root.right = nodeThree;

newTree.root.left.left = new node(2);
newTree.root.left.right = new node(6);

newTree.root.left.right.left = new node(5);
newTree.root.left.right.right = new node(11);

newTree.root.right.right = new node(9);
newTree.root.right.right.left = new node(4);

function maxTree(root) {
  let maxValue = 0;
  if(root.value === null){
    return maxValue;
  }
  let leftChild = maxTree(root.left);
  let rightChild = maxTree(root.right);
  if(leftChild > rightChild){
    maxValue = leftChild;
  } else if(rightChild > leftChild){
    maxValue = rightChild;
  } else {
    maxValue = leftChild;
  }
  return maxValue;
}

console.log(maxTree(newTree.root));
module.exports = {
  maxTree: tree,

}; //please add this
console.log();
