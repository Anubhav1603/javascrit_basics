// Check if a number is prime.

const check_prime = (num) => {
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  if (factors.length === 2) {
    return true;
  } else {
    return false;
  }
};

console.log(check_prime(3));
console.log(check_prime(4));
