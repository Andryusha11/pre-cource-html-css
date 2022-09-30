//put your code here
function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let min = arr[0];
  let max = arr[0];
  for (let i of arr) {
    if (i > max) {
      max = i;
    } else if (i <= min) {
      min = i;
    }
  }
  return max;
}

console.log(checker([10, 20, 30, 40, 50, 60]));
