// Swap two numbers using a temporary variable.

const swap_number = (first, second) => {
  let num1 = first;
  let num2 = second;
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return [num1, num2];
};
console.log(swap_number(3, 4));
