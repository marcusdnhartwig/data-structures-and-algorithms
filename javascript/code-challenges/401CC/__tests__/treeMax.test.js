'use strict';

const trees = require('./treeMax16.js');

describe('testing functionality of binary trees and binary search trees', () => {
  it ('should instantiate an empty tree', () => {
    const test = new trees.tree();

    expect(test.root).toEqual(null);
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
});
