// -------------------------------------------------------------- imports --

import { gsap } from "gsap";

// -------------------------------------------------------------- DOM load checkup --

document.addEventListener("DOMContentLoaded", function (test) {
  console.log("check");
});

// -------------------------------------------------------------- nav --
var burger = document.querySelector("[data-burger]");
var burgerWindow = document.querySelector("[data-burgerWindow]");
var burgerIcon = document.querySelector("[data-burgerIcon]");

burgerIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  burger.classList.toggle("is-open");
}

// -------------------------------------------------------------- project --

var wholeProjectContainers = document.querySelectorAll(
  ".project-container-whole"
);

// ------------------------------------- timeline --

wholeProjectContainers.forEach(function (container) {
  var timelineProjectIsActive = gsap.timeline({
    paused: true,
    onComplete: () => {
      console.log("timeline complete");
    },
    onReverseComplete: () => {
      console.log("reverse timeline complete");
    },
  });

  // ------------------------------------- animation --

  timelineProjectIsActive.to(container.querySelector(".project-titles"), {
    top: "0",
  });

  timelineProjectIsActive.to(
    container.querySelector(".project-img"),
    {
      height: "500px",
    },
    "<"
  );

  timelineProjectIsActive.to(
    container.querySelector(".project-img-container"),
    {
      top: "60px",
      maxHeight: "500px",
    },
    "<"
  );

  // ------------------------------------- event listeer --

  container.addEventListener("click", (event) => {
    var currentContainer = event.currentTarget;
    currentContainer.classList.toggle("is-active");

    if (currentContainer.classList.contains("is-active")) {
      timelineProjectIsActive.play();
    } else {
      timelineProjectIsActive.reverse();
    }
  });
});
