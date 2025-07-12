// Find the length of a string without using .length.

const find_length = (str) => {
  let len = 0;
  for (let i in str) {
    len = Number(i) + 1;
  }
  return len;
};
console.log(find_length("abf"));
