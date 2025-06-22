// JavaScript for Question 10
btn = document.querySelector(".add-btn");
btn.addEventListener("click", function () {
  ul_tag = document.querySelector("#list");
  li_tag = document.createElement("li");
  li_tag.innerText = "New Item";
  ul_tag.appendChild(li_tag);
});
