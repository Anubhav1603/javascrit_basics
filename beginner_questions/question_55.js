// Create a function to check if a number is prime.

const prime = (num) => {
  if (num <= 1) return false;
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i) {
      factors.push(i);
    }
  }
  return factors.length >= 2;
};
console.log(prime(4));
