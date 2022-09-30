'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  // put your code here
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

// examples
console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
