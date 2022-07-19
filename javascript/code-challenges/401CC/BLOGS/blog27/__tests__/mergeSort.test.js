'use strict';

const mergeSort = require('../mergeSort.js');

describe('Testing merge sort function', () => {
  it ('should sort the array in ascending order', () => {
    let sampleArray = [8,4,23,42,16,15];
    let test = mergeSort(sampleArray);

    expect(test).toEqual([4,8,15,16,23,42]);
  });
});
