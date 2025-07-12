// Check if a number is an Armstrong number.

const countDigit = (num) => {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};
const Armstrong = (num) => {
  let digits = countDigit(num);
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
};

console.log(Armstrong(153));
