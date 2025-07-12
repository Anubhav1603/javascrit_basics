// Remove vowels from a string.

const vowel = ["a", "e", "i", "o", "u"];
const final_word = [];
const remove_vowel = (str) => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (!vowel.includes(char)) {
      final_word.push(char);
    }
  }
  return final_word.join("");
};
console.log(remove_vowel("anubhav"));
