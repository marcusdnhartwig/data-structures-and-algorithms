'use strict';

// I am calling Node from LinkedList.js in order
//  to keep from re-inputing an entire Node
const { Node } = require('./LinkedList');

class Stack {
  constructor() {
    this.top = null;
  }
  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop(){
    if(this.top !== null) {
      let node = this.top;
      this.top = node.next;
      return node;
    }
  }
  peek(){
    return this.top.value;
  }
  isEmpty() {
    if(this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor(){
    this.fron = null;
    this.back = null;
  }
  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }
  dequeue(){
  }
  peek(){
  }
  isEmpty(){
  }
}



module.exports = {
  Stack,
  Queue,
};
