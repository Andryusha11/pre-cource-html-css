// put your code here
let res = 0;
for (let i = 0; i <= 1000; i += 1) {
  if (i % 2 === 1) {
    console.log('Found');
    res += i;
  }
}
if (res * 5 > 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
