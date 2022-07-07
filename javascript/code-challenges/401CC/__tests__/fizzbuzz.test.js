'use strict';

const test = require('../18fizzbuzz.js');

describe('testing fizzBuzzTree function', () => {
  const tree = new test.kTree(3);
  tree.root = new test.kNode(1, tree.k);
  tree.root.children[0] = new test.kNode(3, tree.k);
  tree.root.children[1] = new test.kNode(5, tree.k);
  tree.root.children[2] = new test.kNode(7, tree.k);
  tree.root.children[0].children[0] = new test.kNode(9, tree.k);
  tree.root.children[0].children[1] = new test.kNode(11, tree.k);
  tree.root.children[1].children[0] = new test.kNode(13, tree.k);
  tree.root.children[2].children[0] = new test.kNode(15, tree.k);
  const fizzBuzzTree = test.fizzBuzz(tree);

  it ('should change numbers divisible by 3 to Fizz', () => {
    expect(fizzBuzzTree.root.children[0].value).toEqual('Fizz');
    expect(fizzBuzzTree.root.children[0].children[0].value).toEqual('Fizz');
  });

  it ('should change numbers divisible by 5 to Buzz', () => {
    expect(fizzBuzzTree.root.children[1].value).toEqual('Buzz');
  });

  it ('should change numbers divisible by 3 and 5 to FizzBuzz', () => {
    expect(fizzBuzzTree.root.children[2].children[0].value).toEqual('FizzBuzz');
  });

  it ('should change numbers not divisible by 3 and 5 into a string', () => {
    expect(fizzBuzzTree.root.value).toEqual('1');
    expect(fizzBuzzTree.root.children[2].value).toEqual('7');
    expect(fizzBuzzTree.root.children[0].children[1].value).toEqual('11');
  });

  it ('should create a new tree and not change the values of the original input tree', () => {
    expect(tree.root.value).toEqual(1);
    expect(tree.root.children[0].value).toEqual(3);
    expect(tree.root.children[0].children[1].value).toEqual(11);
    expect(fizzBuzzTree.root.value).toEqual('1');
    expect(fizzBuzzTree.root.children[0].value).toEqual('Fizz');
    expect(fizzBuzzTree.root.children[0].children[1].value).toEqual('11');
  });

});
