function sortAsk(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let j = 0; j < arr.length; j += 1) {
    for (let i = 0; i < arr.length - 1; i += 1) {
      let a = arr[i];
      let b = arr[i + 1];
      if (a > b) {
        let temp = a;
        a = b;
        b = temp;
      }
      arr[i] = a;
      arr[i + 1] = b;
    }
  }
  return arr;
}
function sortDesk(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let j = 0; j < arr.length; j += 1) {
    for (let i = 0; i < arr.length - 1; i += 1) {
      let a = arr[i];
      let b = arr[i + 1];
      if (a < b) {
        let temp = a;
        a = b;
        b = temp;
      }
      arr[i] = a;
      arr[i + 1] = b;
    }
  }
  return arr;
}
console.log(sortAsk([4, 2, 5, 4, 7, 3, 1]));
console.log(sortDesk([4, 2, 5, 4, 7, 3, 1]));
