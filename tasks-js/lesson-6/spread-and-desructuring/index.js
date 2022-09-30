'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  // put your code here
  const [start, ...others] = numbers;
  return [...others, start];
}
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  // put your code here
  const newArr = numbers.slice();
  const start = newArr.shift();
  newArr.push(start);
  return newArr;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
