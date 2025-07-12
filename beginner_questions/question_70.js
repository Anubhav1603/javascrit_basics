// Check if a number is a perfect number.

const perfect_no = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }

  return sum == num;
};

console.log(perfect_no(5));
