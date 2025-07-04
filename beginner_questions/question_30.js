// Count the number of digits in a number.
let num = 400;
let temp = 0;
let count = 0;
while (num > 0) {
  count += 1;
  num = Math.floor(num / 10);
}
console.log(count);
