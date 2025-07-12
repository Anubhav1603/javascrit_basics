// Find the sum of digits of a number.

const SumNum = (num) => {
  let sum = 0;
  let temp = 0;
  while (num > 0) {
    temp = num % 10;
    sum = sum + temp;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(SumNum(2121));
