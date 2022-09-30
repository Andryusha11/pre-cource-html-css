/**
 * @param {number} num
 * @return {undefined}
 */
function isPrime(num) {
  // put your code here
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

console.log(getPrimes(12));
