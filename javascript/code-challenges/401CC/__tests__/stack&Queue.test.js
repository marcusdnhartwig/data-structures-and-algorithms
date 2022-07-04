'use strict';

const stacksAndQueues = require('../stack&Queue10.js');

describe('testing functionality of stacks and queues constructors and methods', () => {
  it ('should successfully push onto a stack', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('first');
    stack.push(newNode);

    expect(stack.top.value).toEqual('first');
  });

  it ('should successfully push multiple values onto a stack', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('first');
    const newNodeTwo = new stacksAndQueues.node('second');
    stack.push(newNode);
    stack.push(newNodeTwo);

    expect(stack.top.value).toEqual('second');
    expect(stack.top.next.value).toEqual('first');
  });

  it ('should successfully pop off the stack', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('first');
    const newNodeTwo = new stacksAndQueues.node('second');
    stack.push(newNode);
    stack.push(newNodeTwo);
    stack.pop();

    expect(stack.top.value).toEqual('first');
    expect(stack.top.next).toEqual(null);
  });

  it ('should successfuly empty a stack after multiple pops', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('first');
    const newNodeTwo = new stacksAndQueues.node('second');
    stack.push(newNode);
    stack.push(newNodeTwo);
    let returnOne = stack.pop();
    let returnTwo = stack.pop();

    expect(returnOne).toEqual('second');
    expect(returnTwo).toEqual('first');
    expect(stack.isEmpty()).toBeTruthy();
  });

  it ('should successfully peek the next item on the stack', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('first');
    const newNodeTwo = new stacksAndQueues.node('second');
    stack.push(newNode);
    stack.push(newNodeTwo);
    let test = stack.peek();

    expect(test).toEqual('second');
  });

  it ('should successfully instantiate an empty stack', () => {
    const stack = new stacksAndQueues.stack();

    expect(stack.top).toEqual(null);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it ('calling pop or peek on empty stack raises exception', () => {
    const stack = new stacksAndQueues.stack();

    expect(() => stack.pop().toThrow('no node in stack'));
    expect(() => stack.peek().toThrow('no node in stack'));
  });

  it ('should successfully enqueue into a queue', () => {
    let queue = new stacksAndQueues.queue();
    const newNode = new stacksAndQueues.node('first');
    queue.enqueue(newNode);

    expect(queue.rear.value).toEqual('first');
    expect(queue.front.value).toEqual('first');
  });

  it ('should successfully enqueue multiple values into a queue', () => {
    let queue = new stacksAndQueues.queue();
    const newNode = new stacksAndQueues.node('first');
    const newNodeTwo = new stacksAndQueues.node('second');
    queue.enqueue(newNode);
    queue.enqueue(newNodeTwo);

    expect(queue.rear.value).toEqual('second');
    expect(queue.front.value).toEqual('first');
  });

  it ('should successfully dequeue out of a queue the expected value', () => {
    let queue = new stacksAndQueues.queue();
    const newNode = new stacksAndQueues.node('first');
    const newNodeTwo = new stacksAndQueues.node('second');
    queue.enqueue(newNode);
    queue.enqueue(newNodeTwo);
    let test = queue.dequeue();

    expect(test).toEqual('first');
  });

  it ('should successfully peek into a queue, seeing the expected value', () => {
    let queue = new stacksAndQueues.queue();
    const newNode = new stacksAndQueues.node('first');
    queue.enqueue(newNode);
    let test = queue.peek();

    expect(test).toEqual('first');
  });

  it ('should successfully empty a queue after multiple dequeues', () => {
    let queue = new stacksAndQueues.queue();
    const newNode = new stacksAndQueues.node('first');
    const newNodeTwo = new stacksAndQueues.node('second');
    queue.enqueue(newNode);
    queue.enqueue(newNodeTwo);
    let testOne = queue.dequeue();
    let testTwo = queue.dequeue();

    expect(testOne).toEqual('first');
    expect(testTwo).toEqual('second');
    expect(queue.isEmpty()).toBeTruthy();
  });

  it ('should successfully instantiate an empty queue', () => {
    let queue = new stacksAndQueues.queue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  it ('calling dequeue or peek on empty queue raises exception', () => {
    const queue = new stacksAndQueues.queue();

    expect(() => queue.pop().toThrow('no node in queue'));
    expect(() => queue.peek().toThrow('no node in queue'));
  });
});
