// JavaScript for Question 5
const btn_click = document.getElementById("once-btn");
const handleClick = () => {
  console.log("Clicked!");
  btn_click.removeEventListener("click", handleClick);
};
btn_click.addEventListener("click", handleClick);
