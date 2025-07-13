// Print a Floyd's Triangle.
let a = "";
let count = 1;
for (let row = 1; row <= 5; row++) {
  for (let column = 1; column <= row; column++) {
    a += `${count} `;
    count += 1;
  }
  console.log(a);
  a = "";
}
