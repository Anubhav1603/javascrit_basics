// JavaScript for Question 10
const items = ["pen", "pencil", "eraser"];
const final = items.reduce(add_comma);
function add_comma(accumulator, element) {
  return accumulator + "," + element;
}
console.log(final);
