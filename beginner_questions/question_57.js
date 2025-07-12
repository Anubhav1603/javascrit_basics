// Create a function to check if a string is a palindrome.

const palindrome = (str) => {
  const rev_str = str.split("").reverse().join("");

  return str === rev_str;
};

console.log(palindrome("avat"));
