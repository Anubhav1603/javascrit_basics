// JavaScript for Question 9
const add_btn = document.getElementById("temp-btn");
const remove_btn = document.getElementById("remove-btn");
const handleClick = () => console.log("I am clicked!");
add_btn.addEventListener("click", handleClick);
remove_btn.removeEventListener("click", handleClick);
