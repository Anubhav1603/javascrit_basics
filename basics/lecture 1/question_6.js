// JavaScript for Question 6
var a = 1;
let b = 1;
const c = 1;
console.log(a);
console.log(b);
console.log(c);
a = 2;
console.log(a); // this will be overwritten (var is functional scoped)
b = 2;
console.log(b); // this will be overwritten (let is block scoped)
c = 2;
console.log(c); // this will error out as const cannot be reassigned
