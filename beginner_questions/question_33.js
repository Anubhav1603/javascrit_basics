// Find the sum of all elements in an array.

const sumArray = (array) => array.reduce((arr, elem) => arr + elem, 0);

console.log(sumArray([1, 2, 3, 4, 5]));
