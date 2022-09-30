// put your code here
let res = 0;
for (let i = 1; i <= 1000; i += 1) {
  res += i;
}
const isDiv = (res - (res % 1234)) / 1234;
const isMod = res % 1234;

console.log(res);
console.log(isDiv);
console.log(isMod);
console.log(isDiv > isMod);
