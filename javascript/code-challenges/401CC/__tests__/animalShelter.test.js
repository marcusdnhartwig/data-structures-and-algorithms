'use strict';

const shelter = require('../12animalShelter.js');
const cat = new shelter.Cat();
const dog = new shelter.Dog();

describe('testing the animal shelter', () => {
  const animalShelter = new shelter.AnimalShelter();
  animalShelter.animalShelterEnqueue(dog);
  animalShelter.animalShelterEnqueue(cat);

  it('should be able to enqueue a cat', () => {

    // console.log('animal shelter', animalShelter);
    expect(animalShelter.cat.front.value).toEqual('cat');
  });

  it('should be able to enqueue a dog', () => {

    // console.log('animal shelter', animalShelter);
    expect(animalShelter.dog.front.value).toEqual('dog');
  });

  it('should be able to dequeue a cat when cat is pref', () => {
    // animalShelter.animalShelterDequeue(cat);
    // console.log('animal shelter', animalShelter);
    expect(animalShelter.animalShelterDequeue('cat')).toEqual('cat');
  });

  it('should be able to dequeue a dog when dog is pref', () => {

    // console.log('animal shelter', animalShelter);
    expect(animalShelter.animalShelterDequeue('dog')).toEqual('dog');
  });

  it('should only accept cats and dogs, otherwise should return null', () => {

    // console.log('animal shelter', animalShelter);
    expect(animalShelter.animalShelterDequeue('bunny')).toEqual(null);
  });

});
