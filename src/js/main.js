var burger = document.querySelector("[data-burger]");
var burgerWindow = document.querySelector("[data-burgerWindow]");
var burgerIcon = document.querySelector("[data-burgerIcon]");

console.log("hello");

burgerIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  burger.classList.toggle("is-open");
}

var wholeProjectContainers = document.querySelectorAll(
  ".project-container-whole"
);

wholeProjectContainers.forEach(function (container) {
  container.addEventListener("click", toggleProjectOpen);
});

function toggleProjectOpen(event) {
  console.log("toggle open classes");
  var currentContainer = event.currentTarget;
  var projectTopics = currentContainer.querySelector(".project-topics");
  var projectContainer = currentContainer.querySelector(".project-container");
  var projectTitles = currentContainer.querySelector(".project-titles");
  var projectImgContainer = currentContainer.querySelector(
    ".project-img-container"
  );
  var projectImg = currentContainer.querySelector(".project-img");
  var projectText = currentContainer.querySelector(".project-text");
  var extend = currentContainer.querySelector(".extend");

  currentContainer.classList.toggle("project-container-whole-open");
  projectTopics.classList.toggle("project-topics-open");
  projectContainer.classList.toggle("project-container-open");
  projectTitles.classList.toggle("project-titles-open");
  projectImgContainer.classList.toggle("project-img-container-open");
  projectImg.classList.toggle("project-img-open");
  projectText.classList.toggle("project-text-open");
  extend.classList.toggle("extend-open");
  console.log("end of toggle");
}
