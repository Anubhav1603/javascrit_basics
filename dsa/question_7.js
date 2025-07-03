// Check if a number is positive, negative, or zero.

const number_pos_neg_zero = (num) => {
  if (num == 0) {
    return "Number is 0";
  } else if (num > 0) {
    return "Number is positive";
  } else return "Number is negative";
};

console.log(number_pos_neg_zero(0));
