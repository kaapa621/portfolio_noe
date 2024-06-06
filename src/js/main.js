var burger = document.querySelector("[data-burger]");
var burgerWindow = document.querySelector("[data-burgerWindow]");
var burgerIcon = document.querySelector("[data-burgerIcon]");

console.log("hello");

burgerIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  burger.classList.toggle("is-open");
}
