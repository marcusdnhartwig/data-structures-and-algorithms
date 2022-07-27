'use strict';

const hash = require('../hashtable.js');

describe('testing hash tables', () => {
  let test = new hash.HashTable(1024);

  it('should successfully add a key/value to the hashtable', () => {
    test.add('dog', 'bode');
    test.add('cat', 'ginger');
    test.add('bear', 'beary');

    expect(test.contains('dog')).toEqual(true);
  });

  it('retrieving based on a key returns the value stored', () => {
    test.add('dog', 'bode');
    test.add('cat', 'ginger');
    test.add('bear', 'beary');

    expect(test.get('dog')).toEqual('bode');
  });

  it('successfully returns false for a key that does not exist in the hashtable', () => {
    test.add('dog', 'bode');
    test.add('cat', 'ginger');
    test.add('bear', 'beary');

    expect(test.contains('giraffe')).toEqual(false);
  });

  it('successfully handles a collision within the hash table', () => {
    test.add('dog', 'bode');
    test.add('cat', 'ginger');
    test.add('dog', 'rossi');

    expect(test.add('dog', 'rossi')).toEqual(undefined);
  });

  it('successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    test.add('dog', 'bode');
    test.add('cat', 'ginger');
    test.add('dog', 'rossi');

    expect(test.get('dog')).toEqual('bode');
  });

  it('Successfully hash a key to an in-range value', () => {
    const hash = test.hash('test');

    expect(hash).toBeLessThanOrEqual(1024);
  });
});
