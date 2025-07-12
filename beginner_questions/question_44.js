// Find frequency of each element in an array.
const obj = {};

const arr = [1, 2, 2, 3, 3, 3];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (obj[element]) {
    obj[element] += 1;
  } else {
    obj[element] = 1;
  }
}
console.log(obj);
