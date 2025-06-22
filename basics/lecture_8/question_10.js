// JavaScript for Question 10
// JavaScript for Question 6
const btn_click = document.getElementById("mode-btn");
btn_click.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn_click.innerText = "Switch to light mode";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btn_click.innerText = "Switch to dark mode";
  }
});
