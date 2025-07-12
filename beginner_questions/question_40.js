// Find duplicate elements in an array.
const obj = {};
let keys = [];
const arr = [1, 2, 3, 3, 3, 4, 5, 2];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
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
