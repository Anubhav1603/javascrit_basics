// Check if a year is a leap year.

const check_leap_year = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "leap year";
  } else {
    return "Not a leap year";
  }
};
console.log(check_leap_year(2025));
