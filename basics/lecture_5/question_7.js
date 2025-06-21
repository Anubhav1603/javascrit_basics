// JavaScript for Question 7
const prices = [100, 200, 300];
final_sum = prices.reduce(sum);
function sum(accumulator, element) {
  return accumulator + element;
}
console.log(final_sum);
