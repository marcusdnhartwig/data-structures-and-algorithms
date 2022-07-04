'use strict';

// challenge 06: append(value),
// insertBefore(value, newValue),
// insertAfter(value, newValue)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }


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

  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
    console.log('Finnished Traversing');
  }

  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  includes(value) {
    let current = this.head;
    let result = false;
    while (current) {
      if (current.value === value) {
        result = true;
        return result;
      } else if (current.value !== value) {
        current = current.next;
      }
    }
    return result;
  }

  toString() {
    let current = this.head;
    let string;
    while (current) {
      string += `{${current.value}} -> `;
      current = current.next;
      if (!current) {
        string += 'NULL';
      }
    }
    let resultString = string.slice(4, (string.length));
    return resultString;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    let previous;
    if (current.value === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      let i = 0;
      while (i++ < value) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    console.log(LinkedList)
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        next.value = newValue;
        newValue.next = current.next;
        next.next++;
      } else {
        current = current.next;
      }
      return;
    }
  }

  // Code Challenge 07: kthFromEnd(k)
  kthFromEnd(k) {
    let newArray = [];
    let currentNode = this.head;
    newArray.push(currentNode.value);
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      newArray.push(currentNode.value);
    }
    let index = newArray.length - k;
    if (index >= 1) {
      return newArray[index - 1];
    } else {
      console.log(newArray);
      return `${k} is NOT an index.`;
    }
  }

  // Code Challenge 08: zipList(listOne, ListTwo)
  zipLists(list1, list2) {
    let zipper = new LinkedList();
    let currentA = list1.head;
    let currentB = list2.head;
    let currentZip = zipper.head;
    while (currentA && currentB) {
      if (currentZip === null) {
        zipper.head = currentA;
        currentZip = zipper.head;
        currentA = currentA.next;
      }
      currentZip.next = currentB;
      currentB = currentB.next;
      currentZip = currentZip.next;
      currentZip.next = currentA;
      currentA = currentA.next;
      currentZip = currentZip.next;
    }
    currentA ? currentZip.next = currentA : currentZip.next = currentB;
    return zipper;
  }
}



// Calling Challenge 06
// LinkedList.append('a');
// LinkedList.append('b');
// LinkedList.append('c');
// LinkedList.append('d');
// LinkedList.append('e');

// Calling Challenge 07
// const list = new LinkedList();
// list.append('PartOne');
// list.append('PartTwo');
// list.append('AIRBORNE');

// list.kthFromEnd(2);

module.exports = {
  LinkedList,
  Node,
};

















// 'use strict';

// class Node {
//   constructor (value) {
//   this.value = value;
//   this.next = null;
//   }
// }

// class LinkedList {
//   constructor(){
//     this.head = null;
//   }


// append(value) {
//   let node = new Node(value);
//     if(this.head === null) {
//       this.head = node;
//       return Node;
//     }
//   let currentNode = this.head;
//   while (currentNode.next) {
//     currentNode = currentNode.next;
//   }
//   currentNode.next = node;
//   }
//   insert(value) {
//     let node = new Node(value);
//     this.head = node;
//   }
//   includes(value) {
//     let currentNode = this.head;
//     while(currentNode) {
//       if(currentNode.value === value) {
//         return true;
//       }
//       currentNode = currentNode.next;
//     }
//     return false;
//   }
//   to_string(){
//     let currentNode = this.head;
//     let values = '';
//     while(currentNode !== null) {
//       values += `{${currentNode.value}}-> `;
//       currentNode = currentNode.next;
//     }
//     values += 'NULL';
//     return values;
//   }
//   insertBefore(value, newValue){
//     let newNode = new Node(newValue);
//     let currentNode = this.head;
//     let previousNode;
//     while(currentNode !== null){
//       if(currentNode.value === value){
//         newNode.next = currentNode;
//         previousNode.next = newNode;
//         return;
//       }
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//     }
//   }
//   insertAfter(value, newValue){
//     let newNode = new Node(newValue);
//     let currentNode = this.head;
//     let nextValue;
//     while(currentNode !== null){
//       if(currentNode.value === value){
//         nextValue = currentNode.next;
//         currentNode.next = newNode;
//         newNode.next = nextValue;
//         return;
//       }
//       currentNode = currentNode.next;
//     }
//   }
//   kthEnd(k){
//     let newArray = [];
//     let currentNode = this.head;
//     newArray.push(currentNode.value);
//     while(currentNode.next !== null){
//       currentNode = currentNode.next;
//       newArray.push(currentNode.value);
//     }
//     let index = newArray.length -k;
//     if(index >= 1) {
//       return newArray[index -1];
//     } else {
//       return `${k} is NOT an index.`;
//     }
//   }
// }

// let newList = newLinkedList();

// newList.append('Marcus');
// newList.append(3);
// newList.insertAfter('Marcus', 'Hartwig');

// console.log(JSON.stringify(newList));
// console.log(newList.kthEnd(2));
// console.log(newList.kthEnd(5));

// module.exports = Node;
// module.exports = LinkedList;
