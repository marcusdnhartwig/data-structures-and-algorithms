'use strict';

const hash = require('../../HashTable/hashTable.js');
const leftJoin = require('../leftJoin.js');

let hashOne = new hash.HashTable(50);
let hashTwo = new hash.HashTable(50);
let hashThree = new hash.HashTable(50);

hashOne.add('fond', 'enamored');
hashOne.add('wrath', 'anger');
hashOne.add('diligent', 'employed');
hashOne.add('outfit', 'garb');
hashOne.add('guide', 'usher');

hashTwo.add('fond', 'averse');
hashTwo.add('wrath', 'delight');
hashTwo.add('diligent', 'idle');
hashTwo.add('guide', 'follow');
hashTwo.add('flow', 'jam');

hashThree.add('apple', 'averse');
hashThree.add('orange', 'delight');
hashThree.add('banana', 'idle');
hashThree.add('grapes', 'follow');
hashThree.add('pear', 'jam');

describe('testing the leftJoin function', () => {

  it('should successfully join two hashmaps into a single data structure', () => {

    expect(leftJoin(hashOne, hashTwo)).toEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
    ]);
  });

  it('should successfully return data structure with two values for each key if the same table is passed twice', () => {

    expect(leftJoin(hashOne, hashOne)).toEqual([
      ['wrath', 'anger', 'anger'],
      ['diligent', 'employed', 'employed'],
      ['guide', 'usher', 'usher'],
      ['fond', 'enamored', 'enamored'],
      ['outfit', 'garb', 'garb'],
    ]);
  });

  it('should successfully return data structure with null as third element in every array for two tables with no matching keys', () => {

    expect(leftJoin(hashOne, hashThree)).toEqual([
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['guide', 'usher', null],
      ['fond', 'enamored', null],
      ['outfit', 'garb', null],
    ]);
  });
});
