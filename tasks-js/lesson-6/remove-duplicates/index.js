// put your code here
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(removeDuplicates([1, 5, 3, 7, 6, 2, 1, 5, 3, 7, 6, 2]));
