'use strict';

const psuedo = require('../11stack-queue-psuedo.js');

describe('testing pseudoqueue functionality', () => {
  const pseudoQueue = new psuedo.queue();
  const nodeA = new psuedo.node(20);
  const nodeB = new psuedo.node(15);
  const nodeC = new psuedo.node(10);
  const nodeD = new psuedo.node(5);
  pseudoQueue.enqueue(nodeA);
  pseudoQueue.enqueue(nodeB);
  pseudoQueue.enqueue(nodeC);
  pseudoQueue.enqueue(nodeD);

  it ('should insert value into the pseudoQueue first', () => {

    // console.log('this is pseudoqueue', pseudoQueue);
    expect(pseudoQueue.rear.top.value).toEqual(5);
  });

  it ('should insert value into the empty pseudoque', () => {
    // const pseudoQueue = new psuedo.queue();
    // const nodeA = new psuedo.node(5);
    const pseudoQueueTwo = new psuedo.queue();
    const nodeA = new psuedo.node(5);

    pseudoQueueTwo.enqueue(nodeA);
  });

  it ('should output value of last node in pseudoqueue', () => {
    pseudoQueue.dequeue();

    expect(pseudoQueue.dequeue().value).toEqual(15);
  });
});
