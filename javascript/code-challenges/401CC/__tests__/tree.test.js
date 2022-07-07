'use strict';

const trees = require('../15-17tree.js');

describe('testing functionality of binary trees and binary search trees', () => {
  it ('should instantiate an empty tree', () => {
    const test = new trees.tree();

    expect(test.root).toEqual(null);
  });

  it ('should instantiate a tree with a single root node', () => {
    const test = new trees.tree();
    test.root = new trees.node(1);

    expect(test.root.value).toEqual(1);
  });

  it ('should successfully add a left child and a right child to a single root node', () => {
    const test = new trees.binaryTree();
    test.root = new trees.node(5);
    test.add(2);
    test.add(8);

    expect(test.root.left.value).toEqual(2);
    expect(test.root.right.value).toEqual(8);
  });

  it ('should successfully return a collection from a pre-order traversal', () => {
    const test = new trees.tree();
    test.root = new trees.node(1);
    test.root.left = new trees.node(2);
    test.root.right = new trees.node(3);
    const testArray = test.preOrder();

    expect(testArray).toEqual([1,2,3]);
  });

  it ('should successfully return a collection from an in-order traversal', () => {
    const test = new trees.tree();
    test.root = new trees.node(1);
    test.root.left = new trees.node(2);
    test.root.right = new trees.node(3);
    const testArray = test.inOrder();

    expect(testArray).toEqual([2,1,3]);
  });

  it ('should successfully return a collection from a post-order traversal', () => {
    const test = new trees.tree();
    test.root = new trees.node(1);
    test.root.left = new trees.node(2);
    test.root.right = new trees.node(3);
    const testArray = test.postOrder();

    expect(testArray).toEqual([2,3,1]);
  });

  it ('should return true for a value that is in the tree', () => {
    const test = new trees.binaryTree();
    test.root = new trees.node(5);
    test.add(2);
    test.add(8);
    const testValue = test.contains(2);

    expect(testValue).toEqual(true);
  });

  it ('should return false for a value that is in the tree', () => {
    const test = new trees.binaryTree();
    test.root = new trees.node(5);
    test.add(2);
    test.add(8);
    const testValue = test.contains(3);

    expect(testValue).toEqual(false);
  });

  it ('should return the maximum value in the tree for a tree with numerous nodes', () => {
    const test = new trees.tree();
    test.root = new trees.node(2);
    test.root.left = new trees.node(7);
    test.root.left.left = new trees.node(2);
    test.root.left.right = new trees.node(6);
    test.root.left.right.left = new trees.node(5);
    test.root.left.right.right = new trees.node(11);
    test.root.right = new trees.node(5);
    test.root.right.right = new trees.node(9);
    test.root.right.right.left = new trees.node(4);
    const testValue = test.findMaximumValue();

    expect(testValue).toEqual(11);
  });

  it ('should return the maximum value in the tree with one node', () => {
    const test = new trees.tree();
    test.root = new trees.node(2);
    const testValue = test.findMaximumValue();

    expect(testValue).toEqual(2);
  });

  it ('should traverse the input tree with breadth first traversal and return the list of values', () => {
    const test = new trees.tree();
    test.root = new trees.node(2);
    test.root.left = new trees.node(7);
    test.root.left.left = new trees.node(2);
    test.root.left.right = new trees.node(6);
    test.root.left.right.left = new trees.node(5);
    test.root.left.right.right = new trees.node(11);
    test.root.right = new trees.node(5);
    test.root.right.right = new trees.node(9);
    test.root.right.right.left = new trees.node(4);
    const testValue = test.breadthFirstTraversal();

    expect(testValue).toEqual([2,7,5,2,6,9,5,11,4]);
  });
});
