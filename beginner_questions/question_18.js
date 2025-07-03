// Check if a string is a palindrome.

const check_string_palindrome = (word) => {
  if (word === word.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(check_string_palindrome("H ollo h"));
