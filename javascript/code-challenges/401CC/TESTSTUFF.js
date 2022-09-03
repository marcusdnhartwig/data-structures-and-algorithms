let LinkedList = require('./LinkedList.js');

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(33);
list.add(4);
list.add(33);
list.add(5);

// confirmed:  it works!
// console.log(list);

// write a function that takes in a list and traverse that linked list, console logging every value

function traversal(list){
  let current = list.head;
  let previous = list.head;
  hash(key) {
    let asciiSum =
      key.split().reduce((acc, char)=> {
        return acc + char.charCodeAt(0);
      }, 0);
    return(acciiSum * 599) % this.size;
  }
  add(key, value) {
    let hash = this.hash(key);
    if(!this.bucket[hash]){
      this.buckets[hash] = new LinkedList();
    }
    let data = {[key]: value};
    this.buckets[hash].insert(data);
  }
  contains(key) {
    let hash = this.hash(key);
    if(this.buckets[hash]) {
      return true;
    } else {
      return false;
    }
  }

  while (current){
    console.log(current.value)
    current = current.next;
  }
}

traversal(list);

