// Create a function to find the GCD of two numbers.

const gcd = (a, b) => {
  const factors = [];
  const range = Math.min(a, b);

  for (let i = 0; i < range; i++) {
    if (a % i === 0 && b % i === 0) {
      factors.push(i);
    }
  }
  return Math.max(...factors);
};
console.log(gcd(4, 6));
