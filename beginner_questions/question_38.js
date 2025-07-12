// Count vowels and consonants in a string.
const obj = {};
const vowel = ["a", "e", "i", "o", "u"];
const count = (str) => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowel.includes(char)) {
      obj["vowel"] = (obj["vowel"] || 0) + 1;
    } else {
      obj["consonant"] = (obj["consonant"] || 0) + 1;
    }
  }
  return obj;
};
console.log(count("anubhav"));
