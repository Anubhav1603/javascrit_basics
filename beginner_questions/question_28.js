// Reverse a given number.
let num = 50;
let rev = 0;
let temp = 0;
while (num > 0) {
  temp = num % 10;
  rev = rev * 10 + temp;
  num = Math.floor(num / 10);
}
console.log(rev);
