'use strict';

function leftJoin(map1, map2) {

  let firstArray = [];
  for (let i = 0; i < map1.buckets.length; i++) {
    let secondArray = [];
    if (map1.buckets[i] !== undefined) {
      let key = (Object.keys(map1.buckets[i].head.value)[0]);
      secondArray.push(key);
      secondArray.push(map1.buckets[i].head.value[key]);
      if (map2.contains(key)) {
        secondArray.push(map2.get(key));
      } else {
        secondArray.push(null);
      }
      firstArray.push(secondArray);
    }
  }
  return firstArray;
}

module.exports = leftJoin;
