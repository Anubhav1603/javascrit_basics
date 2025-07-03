// Find the largest of two numbers.

const find_larger = (num1, num2) => {
  if (num1 == num2) return "Both numbers are equal";
  if (num1 > num2) {
    return num1 + " is larger than " + num2;
  } else {
    return num2 + " is larger than " + num1;
  }
};

console.log(find_larger(45, 88));
