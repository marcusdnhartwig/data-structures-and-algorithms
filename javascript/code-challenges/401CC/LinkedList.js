'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log('done traversing');
  }

  // Code Challenge 05
  // **** INSERT - **** google pre-pending to a linked list - Adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    // if (!this.head) {
    //   this.head = node;
    //   return this.head;
    // } else {
    //   node.next = this.head;
    //   this.head = node;
    // }
  }

  // *** INCLUDES - Indicates whether that value exists as a Node’s value somewhere within the list.
  includes(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        // console.log(true);
        return true;
      }
      node = node.next;
    }
    // console.log(false);
    return false;
  }

  // *** TO STRING - Returns: a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"
  /// REVISIT

  toString() {
    let currentNode = this.head;
    let string = '';
    while (currentNode) {
      string += '{ ' + currentNode.value + ' }' + ' -> ';
      currentNode = currentNode.next;
    }
    string += 'NULL';
    // console.log('string:', string);
    return string;
  }

  //toString() {
  // let currentNode = this.head;
  // let result == '';
  // while(current){
  // result += `{ ${currenNode.value} } => `;
  // }
  // result += 'NULL`;
  // return result
  //}

  // Code Challenge 06
  // append / add
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // insert before
  insertBefore(value, newValue) {
    const node = new Node(value);
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.node = node;
        current.node.value = newValue;
        return;
      }
      current = current.next;
    }
    console.log(current.next);
  }

  // insert after
  insertAfter(value, newValue) {
    const node = new Node(value);
  }

  // Code Challenge 07 // Need to revisit
  kthFromEnd(k) {
    let counter = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      counter++;
      return counter;
    }
    console.log(current.next);
    counter = counter - k;
    if (current.next === counter) {
      return current.next.value;
    } else {
      current = current.next;
    }
  }

  // Code Challenge 08 // Need to Revisit
  zipLists(linkedList1, linkedList2) {
    let temp = new Node(0);
    let currentNode = temp;
    while (currentNode.next) {
      if (currentNode.next !== null) {
        currentNode.next = linkedList1;
        linkedList1 = linkedList1.next;
      } else {
        currentNode.next = linkedList2;
        linkedList2 = linkedList2.next;
      }
      currentNode = currentNode.next;
    }
    console.log('return', temp.netxt);
    return temp.next;
  }
}




let linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);
// linkedList.includes(5);
// linkedList.includes(2);
// linkedList.includes(6);
let result = linkedList.toString();
console.log('string:', result);
// linkedList.append(10);
// linkedList.append(11);
// linkedList.append(12);
// linkedList.insertBefore(3, 7);
// linkedList.kthFromEnd(5);
// linkedList.traverse();

let linkedList1 = new LinkedList();
let linkedList2 = new LinkedList();

linkedList1.insert(1);
linkedList1.insert(3);
linkedList1.insert(2);

linkedList2.insert(5);
linkedList2.insert(9);
linkedList2.insert(4);

linkedList.zipLists(linkedList1, linkedList2);


module.exports = {
  Node,
  LinkedList,
};
