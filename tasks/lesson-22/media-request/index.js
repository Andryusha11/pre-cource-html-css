function arrayDiff(a, b) {
  let difference = a.filter((x) => !b.includes(x));
  return difference;
}

console.log(arrayDiff([1, 2, 2, 2, 3, 4], [2, 3]));
