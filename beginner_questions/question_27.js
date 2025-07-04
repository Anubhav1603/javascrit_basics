// Print Fibonacci series up to n terms.

let a = 0;
let b = 1;
const n = 10;
for (let i = 0; i <= n; i++) {
  console.log(a + b);
  let temp = a;
  a = b;
  b = temp + b;
  i = b;
}
