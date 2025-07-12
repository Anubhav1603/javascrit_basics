// Check if two strings are anagrams.

const obj1 = {};
const obj2 = {};
const check_anagram = (str1, str2) => {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  if (str1 == str2) {
    return "Anagram";
  } else {
    return "Not Anagram";
  }
};
console.log(check_anagram("silent", "liten"));
