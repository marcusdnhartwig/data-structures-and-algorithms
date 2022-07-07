'use strict';

// animal class - taking in value, will be an object (type of animal)
class Animal {
  constructor(value) {
    this.value = value;
    // this.name = null;
    this.next = null;
  }
}

class Dog extends Animal {
  constructor(value) {
    super('dog');
  }
}

class Cat extends Animal {
  constructor(value) {
    super('cat');
  }
}

class AnimalShelter {
  constructor() {
    this.cat = new Aqueue();
    this.dog = new Aqueue();
  }

  //enqueue(animal): adds animal to the shelter, animal can be either cat or dog
  animalShelterEnqueue(animal) {
    //if cat - enqueue into cat queue
    //if dog - enqueue into dog queue
    if (animal.value === 'cat') {
      this.cat.enqueue(animal);
    } else {
      this.dog.enqueue(animal);
    }
  }

  animalShelterDequeue(pref){
    //pull from cat or dog queue depending on pref (input)
    if (pref === 'cat') {
      return this.cat.dequeue();
    } else if (pref === 'dog') {
      return this.dog.dequeue();
    } else {
      //pref is not cat or dog - return null
      return null;
    }
  }


  isEmpty() {
    return this.front === null;
  }
}

class Aqueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(node) {
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (this.isEmpty()){
      throw 'no node in queue';
    } else {
      let temp = this.front;

      this.front = temp.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek() {
    if (this.isEmpty()){
      throw 'no node in queue';
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

let animalA = new Dog();
let animalB = new Cat();
let animalC = new Cat();
let animalD = new Dog();

let queue = new AnimalShelter();
queue.animalShelterEnqueue(animalA);
queue.animalShelterEnqueue(animalB);
queue.animalShelterEnqueue(animalC);
queue.animalShelterEnqueue(animalD);
// console.log('this is queue', queue);
// const animalFromQueue = queue.animalShelterDequeue('dog');
// console.log('this is animal from queue', animalFromQueue);

module.exports = {
  Animal,
  Dog,
  Cat,
  AnimalShelter,
  Aqueue,
};
