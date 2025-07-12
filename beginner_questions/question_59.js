// Create a function to find the LCM of two numbers.

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

const lcm = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }

  return (a * b) / gcd(a, b);
};
console.log(lcm(3, 6));
