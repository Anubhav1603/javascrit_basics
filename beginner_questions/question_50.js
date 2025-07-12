// Find duplicate characters in a string.
const obj = {};
let keys = [];
const str = "ekfkefdn";
for (let i = 0; i < str.length; i++) {
  const element = str[i];
  if (obj[element]) {
    obj[element] += 1;
  } else {
    obj[element] = 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      keys.push(key);
    }
  }
}
keys = new Set(keys);
console.log([...keys]);
