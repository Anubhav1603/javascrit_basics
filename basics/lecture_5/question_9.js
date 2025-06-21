// JavaScript for Question 9
const getInitials = (full_name) =>
  full_name
    .split(" ")
    .map((word) => word[0])
    .reduce(name_concat);
function name_concat(accumulator, element) {
  return accumulator + "." + element;
}
console.log(getInitials("Alice Smith") + ".");
