// Find the largest among three numbers.

const find_larget_among_three = (num1, num2, num3) => {
  if ((num1 == num2) == num3) return "All numbers are equal";
  if (num1 > num2 && num1 > num3) {
    return num1 + " greater than " + num2 + " and " + num3;
  } else if (num2 > num1 && num2 > num3) {
    return num2 + " greater than " + num1 + " and " + num3;
  } else {
    return num3 + " greater than " + num1 + " and " + num2;
  }
};

console.log(find_larget_among_three(146, 73, 25));
