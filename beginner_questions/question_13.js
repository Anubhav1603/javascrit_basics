// Create a simple calculator (add, subtract, multiply, divide).

const calculator = (num1, num2, operation) => {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Error: Division by zero is not allowed";
    }
  } else {
    return "Invalid operation";
  }
};
console.log(calculator(1, 2, "add"));
console.log(calculator(1, 2, "subtract"));
console.log(calculator(1, 2, "divide"));
