// Count even and odd numbers in an array.

const count = { even: 0, odd: 0 };

function find_count(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count["even"] += 1;
    } else {
      count["odd"] += 1;
    }
  }
  return count;
}
console.log(find_count([23, 456, 24, 5, 2, 55, 2, 3, 8]));
