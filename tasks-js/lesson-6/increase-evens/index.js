'use strict';

/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  let result = 0;
  const copyArr = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      result = num + delta;
      copyArr.push(result);
    } else {
      copyArr.push(num);
    }
  }
  return copyArr;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
