'use strict';

'use strict';

//Kary trees
class KaryNode {
  constructor(value, size) {
    this.value = value;
    this.children = new Array(size);
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }
}


function fizzBuzzTree(tree) {
  let newTree = new KaryTree(tree.k);
  newTree.root = new KaryNode(tree.root.value, tree.k);
  // console.log('this is new tree', newTree);
  let current = tree.root;
  let currentTwo = newTree.root;
  // console.log('this is currentTwo', currentTwo);

  let queue = [];
  let queueTwo = [];
  let array = [];

  queue.unshift(current);
  queueTwo.unshift(currentTwo);

  while (queue.length) {

    current = queue.pop();
    currentTwo = queueTwo.pop();
    array.push(current.value);

    if(current.value % 15 === 0){
      currentTwo.value = 'FizzBuzz';
    } else if(current.value % 5 === 0){
      currentTwo.value = 'Buzz';
    } else if(current.value % 3 === 0){
      currentTwo.value = 'Fizz';
    } else {
      currentTwo.value= current.value.toString();
    }

    //have value here - conditional logic for fizz/buzz
    for (let i = 0; i < current.children.length; i++) {
      if (current.children[i]) {
        currentTwo.children[i] = new KaryNode(i, karyTree.k);
        queue.unshift(current.children[i]);
        queueTwo.unshift(currentTwo.children[i]);
      }
    }
  }
  return newTree;
}

const karyTree = new KaryTree(3);
karyTree.root = new KaryNode(5, karyTree.k);
karyTree.root.children[0] = new KaryNode(1, karyTree.k);
karyTree.root.children[1] = new KaryNode(2, karyTree.k);
karyTree.root.children[2] = new KaryNode(15, karyTree.k);
karyTree.root.children[0].children[0] = new KaryNode(10, karyTree.k);

// console.log('this is kary breadth', karyTree.breadth());
console.log('fizzbuzz tree', fizzBuzzTree(karyTree));
// console.log('kary tree', karyTree);

module.exports = {
  kNode: KaryNode,
  kTree: KaryTree,
  fizzBuzz: fizzBuzzTree,
};
