'use strict';

const { Stack } = require('./stackAndQueue');

class PseudoQueue {
  constructor() {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }
  enqueue(value) {
    if (this.inputStack.top === null && this.outputStack.top === null) {
      this.outputStack.push(value);
    }
