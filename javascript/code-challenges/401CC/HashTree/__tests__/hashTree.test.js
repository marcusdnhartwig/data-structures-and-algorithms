'use strict';

const tree = require('../tree-intersection.js');

describe('testing tree intersection function', () => {

  const treeOne = new tree.Tree();
  treeOne.root = new tree.Node(150);
  treeOne.root.left = new tree.Node(100);
  treeOne.root.right = new tree.Node(250);
  treeOne.root.left.left = new tree.Node(75);
  treeOne.root.left.right = new tree.Node(160);
  treeOne.root.left.right.left = new tree.Node(125);
  treeOne.root.left.right.right = new tree.Node(175);
  treeOne.root.right.left = new tree.Node(200);
  treeOne.root.right.right = new tree.Node(350);
  treeOne.root.right.right.left = new tree.Node(300);
  treeOne.root.right.right.right = new tree.Node(500);

  const treeTwo = new tree.Tree();
  treeTwo.root = new tree.Node(42);
  treeTwo.root.left = new tree.Node(100);
  treeTwo.root.right = new tree.Node(600);
  treeTwo.root.left.left = new tree.Node(15);
  treeTwo.root.left.right = new tree.Node(160);
  treeTwo.root.left.right.left = new tree.Node(125);
  treeTwo.root.left.right.right = new tree.Node(175);
  treeTwo.root.right.left = new tree.Node(200);
  treeTwo.root.right.right = new tree.Node(350);
  treeTwo.root.right.right.left = new tree.Node(4);
  treeTwo.root.right.right.right = new tree.Node(500);

  it('should output array of common nodes', () => {
    let test = tree.treeIntersection(treeOne, treeTwo);

    expect(test).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });

});
