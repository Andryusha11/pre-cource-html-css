// put your code here
let result = 0;
const getSum = (start, end) => {
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
};
