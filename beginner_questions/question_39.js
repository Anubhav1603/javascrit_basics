// Reverse a string.
const rev = (word) => {
  word = word.split("");

  return word.reverse().join("");
};

console.log(rev("ei"));
