'use strict';

function validateBracket(input) {
  let array = [];
  let brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let string = input.replace(/[a-zA-Z ]+/g, '');
  for(let i = 0; i < string.length; i++) {
    if(string[i] === '(' || string[i] === '[' || string[i] === '{'){
      array[array.length] = string[i];
    } else {
      let last = array.pop();
      if(string[i] !== brackets[last]){
        return false;
      }
    }
  }
  if(array.length !==0){
    return false;
  }
  return true;
}

module.exports = validateBracket;

console.log(validateBracket('{}(){}'));
console.log(validateBracket('(]('));
