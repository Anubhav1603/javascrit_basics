// Check if a number is divisible by 5 and 11.

const check_num_div = (num) => {
  if (num % 5 == 0 && num % 11 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(check_num_div(555555));
