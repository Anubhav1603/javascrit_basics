// Create a function to find the factorial of a number.

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
console.log(factorial(3));
