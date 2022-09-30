'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = (arr) => {
  // put your code here
  let result = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let sum of arr) {
    result += sum;
  }
  return result > 100;
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
