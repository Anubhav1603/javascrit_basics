// Check if an alphabet is uppercase or lowercase.

const CheckCase = (alphabet) => {
  if (alphabet === alphabet.toUpperCase()) {
    return "Upper Case";
  } else {
    return "Lower Case";
  }
};
console.log(CheckCase("A"));
