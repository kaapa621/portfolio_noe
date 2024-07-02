import { gsap } from "gsap";

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

// var timelineProjectOpen = gsap.timeline({
//   onComplete: () => {
//     console.log("finished timeline");
//   },
// });

wholeProjectContainers.forEach(function (container) {
  container.addEventListener("click", toggleProjectOpen);
  container.addEventListener("click", () => {
    timelineProjectOpen.reversed()
      ? timelineProjectOpen.play()
      : timelineProjectOpen.reverse();
  });
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
  var imgCache = currentContainer.querySelector(".cache-img");
  var projectImg = currentContainer.querySelector(".project-img");
  var projectText = currentContainer.querySelector(".project-text");
  var extend = currentContainer.querySelector(".extend");

  // timelineProjectOpen.to(".project-titles", { backgroundColor: "red" });
  // timelineProjectOpen.to(".cache-img", { backgroundColor: "red" });
  // timelineProjectOpen.to()

  currentContainer.classList.toggle("project-container-whole-open");
  projectTopics.classList.toggle("project-topics-open");
  projectContainer.classList.toggle("project-container-open");
  projectTitles.classList.toggle("project-titles-open");
  imgCache.classList.toggle("cache-img-open");
  projectImgContainer.classList.toggle("project-img-container-open");
  projectImg.classList.toggle("project-img-open");
  projectText.classList.toggle("project-text-open");
  console.log("before extend");
  extend.classList.toggle("extend-open");
  console.log("end of toggle");
}

gsap.to(".project-img-container", { maxHeight: "320px" });
