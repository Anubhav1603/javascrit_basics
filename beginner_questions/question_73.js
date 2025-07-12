// Print a number pyramid.

let a = "";
let extra = 0;
let count = 0;
for (let row = 1; row <= 5; row++) {
  for (let column = 5; column >= row; column--) {
    a += ` `;
  }
  for (let num = 1; num <= row + extra; num++) {
    a += `${count}`;
  }
  console.log(a);
  a = "";
  extra += 1;
  count += 1;
}
