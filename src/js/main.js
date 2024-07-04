// -------------------------------------------------------------- imports --

import { gsap } from "gsap";

// -------------------------------------------------------------- DOM load checkup --

document.addEventListener("DOMContentLoaded", function (test) {
  console.log("DOMcheck");
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
      gsap.to(container.querySelector(".cache-img"), {
        opacity: 1,
      });
      console.log("reverse timeline complete");
    },
  });

  // ------------------------------------- hover --

  var imgContainer = container.querySelector(".project-container");

  var hoverAnimation = gsap.to(container.querySelector(".cache-img"), {
    paused: true,
    opacity: 0,
    duration: 0.3,
  });

  imgContainer.addEventListener("mouseenter", () => hoverAnimation.play());
  imgContainer.addEventListener("mouseleave", () => {
    if (container.classList.contains("is-active")) {
      hoverAnimation.pause();
    } else {
      hoverAnimation.reverse();
    }
  });

  // ------------------------------------- animation --
  timelineProjectIsActive.to(
    container.querySelector(".project-titles"),
    {
      top: "0",
      duration: 0.5,
    },
    "<"
  );

  timelineProjectIsActive.to(
    container.querySelector(".project-container"),
    {
      "--width": "150%",
      marginBottom: "80px",
      duration: 0.5,
    },
    "<"
  );

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

  timelineProjectIsActive.to(
    container.querySelector(".cache-img"),
    {
      top: "60px",
      maxHeight: "500px",
    },
    "<"
  );

  timelineProjectIsActive.to(
    container.querySelector(".project-text"),
    {
      top: "60px",
      maxHeight: "500px",
    },
    "<"
  );

  timelineProjectIsActive.to(
    container.querySelector(".extend"),
    {
      marginTop: "80px",
      marginBottom: "80px",
      height: "auto",
      ease: "power2.inOut",
    },
    "<"
  );

  timelineProjectIsActive.to(
    container.querySelector(".extend"),
    {
      delay: 0.3,
      "--extendWidth": "120vw",
    },
    "<"
  );

  timelineProjectIsActive.to(container.querySelectorAll(".extend-child"), {
    opacity: "1",
    stagger: 0.3,
  });

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
