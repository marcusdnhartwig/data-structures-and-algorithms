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

      // We've reversed because of how are stack handles order (FiLo).
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


  findMaximumValue () {
    let current = this.root;
    if (!current) {
      throw 'no nodes in tree';
    }

    const findMax = (node) => {
      //traverse the tree
      //find max value to the left
      //find max value to the right
      if (node === null){
        return;
      }
      let max = node.value;
      let leftMax = findMax(node.left);
      let rightMax = findMax(node.right);

      if(leftMax > max){
        max = leftMax;
      }
      if(rightMax > max){
        max = rightMax;
      }
      return max;
    };
    return findMax(current);
  }
}

const tree = new Tree();

tree.root = new Node(5);
tree.root.left = new Node(10);
tree.root.left.left = new Node(0);
tree.root.left.right = new Node(20);
tree.root.right = new Node(15);
tree.root.right.right = new Node(25);

module.exports = {
  node: Node,
  tree: Tree,
};
