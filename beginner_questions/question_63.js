// Find the power of a number using a loop.

const findpower = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};
console.log(findpower(5, 2));
