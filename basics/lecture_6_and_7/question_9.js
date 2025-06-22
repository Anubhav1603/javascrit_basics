// JavaScript for Question 9
const li = document.getElementsByTagName("li");
const final = Array.from(li).forEach((element) => {
  element.classList.add("highlight");
  console.log(element.className);
});
