// JavaScript for Question 8
const items = document.getElementsByClassName("item");
console.log(items);
Array.from(items).forEach((item) =>
  item.addEventListener("click", (e) => console.log(e.target.textContent))
);
