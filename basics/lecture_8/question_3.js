// JavaScript for Question 3
const btn_click = document.getElementById("info");

btn_click.addEventListener("click", (e) => {
  console.log(e.type);
  console.log(e.target.tagName);
});
