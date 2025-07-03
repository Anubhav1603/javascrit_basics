// Check if a number is a palindrome.

const isPalindrome = (num) => {
  sum = 0;
  let originalNum = num;
  let temp;
  while (num > 0) {
    temp = num % 10;
    sum = sum * 10 + temp;
    num = Math.floor(num / 10);
  }
  if (originalNum === sum) {
    return true;
  } else return false;
};

console.log(isPalindrome(232));
