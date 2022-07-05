'use strict';

// Trees
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

  inOrder() {
    const values = [];
    const inOrder = (node) => {
      //left -> current -> right
      if (node.left) {
        inOrder(node.left);
      }

      values.push(node.value);

      if (node.right) {
        inOrder(node.right);
      }
    };
    let current = this.root;
    inOrder(current);
    return values;
  }

  postOrder() {
    const values = [];

    const postOrder = (node) => {
      //left -> right -> current
      if (node.left) {
        postOrder(node.left);
      }
      if (node.right) {
        postOrder(node.right);
      }
      values.push(node.value);
    };

    let current = this.root;
    postOrder(current);
    return values;
  }


  traverseWithStack() {
    let current = this.root;
    let stack = [];
    stack.push(current);

    while (stack.length) {

      // console.log(current.value);

      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }

      current = stack.pop();
    }
  }

  breadth() {

    let current = null;
    let queue = [];

    queue.unshift(this.root);

    while (queue.length) {

      current = queue.pop();

      console.log(current.value);

      if (current.left) {
        queue.unshift(current.left);
      }
      if (current.right) {
        queue.unshift(current.right);
      }
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(current){
      if(value === current.value){
        return undefined;
      }
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    console.log('this is root', this.root);
    if(this.root === null) {
      return 'no nodes in tree';
    }
    let current = this.root;
    let found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if (value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

const binaryTree = new BinarySearchTree();

binaryTree.root = new Node(5);
binaryTree.root.left = new Node(3);
binaryTree.root.right = new Node(15);
console.log(binaryTree.contains(20));

// const tree = new Tree();

// tree.root = new Node(5);
// tree.root.left = new Node(10);
// tree.root.left.left = new Node(0);
// tree.root.left.right = new Node(20);
// tree.root.right = new Node(15);
// tree.root.right.right = new Node(25);


// console.log('this is kary breadth', karyTree.breadth());

module.exports = {
  node: Node,
  tree: Tree,
  binaryTree: BinarySearchTree,
};
