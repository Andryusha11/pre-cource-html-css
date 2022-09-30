'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  // put your code here
  const square = [];
  let res = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let num of arr) {
    res = num * num;
    square.push(res);
  }
  return square;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
