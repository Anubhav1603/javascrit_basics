// Create a function to count digits in a number.

const countNum = (num) => {
  let count = 0;
  while (num > 0) {
    count += 1;
    num = Math.floor(num / 10);
  }
  return count;
};
console.log(countNum(45453));
