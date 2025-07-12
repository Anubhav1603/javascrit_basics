// Print a right-angled triangle pattern using *.
let a = "";
for (let row = 1; row <= 5; row++) {
  for (let column = 1; column <= row; column++) {
    a += `*`;
  }
  console.log(a);
  a = "";
}
