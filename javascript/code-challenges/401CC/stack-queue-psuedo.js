'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(node) {
    if (this.isEmpty()) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.top;
  }

  pop() {
    if (this.isEmpty()){
      throw 'no node in stack';
    } else {
      let temp = this.top;

      this.top = temp.next;
      temp.next = null;
      return temp;
    }
  }

  peek() {
    if (this.isEmpty()){
      throw 'no node in stack';
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}

//implement a queue class using stacks
//if you want queue behavior using two stacks - fill the first one all the way up
//then when you pop off that stack, you'll push it to stack two
//effectively when completely emptied the first stack into the second stack, original bottom of the first will be at the top of the second
class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }
  enqueue(value) {
    //inserts
    this.rear.push(value);
  }

  dequeue() {
    if(this.front.isEmpty()) {
      while(!this.rear.isEmpty()) {
        this.front.push(this.rear.pop());
      }
    }
    return this.front.pop();
  }
}

module.exports = {
  node: Node,
  stack: Stack,
  queue: PseudoQueue,
};
