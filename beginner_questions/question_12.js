// Check if a character is a vowel or consonant.
const vowel = ["a", "e", "i", "o", "u"];
const check_vowel_consonant = (char) => {
  if (vowel.includes(char)) {
    return "Vowel";
  } else return "Consonant";
};
console.log(check_vowel_consonant("a"));
