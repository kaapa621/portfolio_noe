import { gsap } from "gsap";
import { CalculationOperation } from "sass";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMcheck");

  var wholeProjectContainers = document.querySelectorAll(
    ".project-container-whole"
  );

  wholeProjectContainers.forEach((container) => {
    // Track if the mouse is over the container
    let isMouseOver = false;

    const projectImg = container.querySelector(".project-img");

    projectImg.style.maxHeight = "auto";
    const initialHeight = projectImg.scrollHeight;
    projectImg.style.maxHeight = "1000px";

    // ------------------------------------- timelines --
    var extendImg = container.querySelector(".extend-project-image");
    var timelineExtendIsActive = gsap.timeline({
      paused: true,
      onComplete: () => {
        console.log("timelineExtend is complete");
      },
    });

    if (extendImg) {
      var timelineExtendIsActive = gsap.timeline({
        paused: true,
      });

      extendImg.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("hear the click");
        if (extendImg.classList.contains("extend-is-active")) {
          timelineExtendIsActive.reverse();
        } else {
          timelineExtendIsActive.play();
        }
        extendImg.classList.toggle("extend-is-active");
      });
    }

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

    imgContainer.addEventListener("mouseenter", () => {
      hoverAnimation.play();
      isMouseOver = true;
    });
    imgContainer.addEventListener("mouseleave", () => {
      if (!container.classList.contains("is-active")) {
        hoverAnimation.reverse();
      }
      isMouseOver = false;
    });

    // ------------------------------------- video player --
    var mediaOpenBack = container.querySelector(".media-player-back");
    var projectMediaButton = container.querySelector(".project-media-button");
    var playerCloseButton = container.querySelector(
      ".video-player-close-button"
    );
    var playerExtendCloseButton = container.querySelector(
      ".extend-player-close-button"
    );
    var videoPlayer = container.querySelector(".video-player");
    var extendPlayer = container.querySelector(".extend-player");
    var youtubeIframe = container.querySelector(".youtube-iframe");

    // Check if each element exists before proceeding
    if (extendImg) {
      extendImg.addEventListener("click", (event) => {
        event.stopPropagation();
        timelinePlayerExtend.play();
      });
    }

    if (playerCloseButton) {
      var timelinePlayerExtend = gsap.timeline({
        paused: true,
        onComplete: () => {
          console.log("timelineExtend complete");
        },
      });

      timelinePlayerExtend.to(mediaOpenBack, {
        height: "100vh",
        duration: 0,
      });

      timelinePlayerExtend.to(mediaOpenBack, {
        opacity: 1,
        pointerEvents: "all",
      });

      timelinePlayerExtend.to(
        extendPlayer,
        {
          height: "85%",
          opacity: 1,
        },
        "<"
      );

      timelinePlayerExtend.eventCallback("onReverseComplete", () => {
        mediaOpenBack.style.pointerEvents = "none";
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        timelinePlayerExtend.reverse();
      }
    });

    if (playerExtendCloseButton) {
      playerExtendCloseButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click event from propagating to parent elements
        timelinePlayerExtend.reverse();
      });
    }

    if (projectMediaButton) {
      projectMediaButton.addEventListener("click", (event) => {
        event.stopPropagation();
        timelinePlayer.play();
      });
    }

    if (playerCloseButton && videoPlayer && youtubeIframe) {
      var timelinePlayer = gsap.timeline({
        paused: true,
        onComplete: () => {
          console.log("timelinePlayer complete");
        },
      });

      timelinePlayer.to(mediaOpenBack, {
        height: "100vh",
        duration: 0,
      });

      timelinePlayer.to(mediaOpenBack, {
        pointerEvents: "all",
        opacity: 1,
      });

      timelinePlayer.to(
        videoPlayer,
        {
          height: "85%",
          opacity: 1,
        },
        "<"
      );

      playerCloseButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click event from propagating to parent elements
        timelinePlayer.reverse();
        var message = {
          event: "command",
          func: "pauseVideo",
          args: [],
        };
        youtubeIframe.contentWindow.postMessage(JSON.stringify(message), "*");
      });

      // Add keydown event listener for Esc key for video player close
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.stopPropagation(); // Prevent event from propagating
          timelinePlayer.reverse();
          var message = {
            event: "command",
            func: "pauseVideo",
            args: [],
          };
          youtubeIframe.contentWindow.postMessage(JSON.stringify(message), "*");
        }
      });
    }

    // ------------------------------------- animation --

    timelineProjectIsActive.to(
      container.querySelector(".project-titles"),
      { top: "0", duration: 0.5 },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".project-close-button"),
      { maxHeight: "30px", opacity: 1, duration: 0.5 },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".project-container"),
      {
        "--width": "130%",
        marginBottom: "80px",
        duration: 0.5,
      },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".project-img-container"),
      { top: "90px", maxHeight: "500px" },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".cache-img"),
      { top: "90px", maxHeight: "500px" },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".project-text"),
      { top: "90px", maxHeight: "500px", maxWidth: "30%", right: "-30%" },
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
      { delay: 0.3, "--extendWidth": "120vw" },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".extend-project-image"),
      { pointerEvents: "auto" },
      "<"
    );

    timelineProjectIsActive
      .to(
        container.querySelector(".project-img"),
        {
          maxHeight: initialHeight + "px", // Animate from 0px to auto height
        },
        "<"
      )
      .to(
        projectImg,
        {
          maxHeight: "500px", // Animate to the final target height
        },
        "<"
      );

    timelineProjectIsActive.to(container.querySelectorAll(".extend-child"), {
      opacity: "1",
      stagger: 0.3,
    });

    timelineProjectIsActive.to(
      container.querySelector(".project-img-container"),
      { overflow: "visible", duration: 0.05 },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".project-media-button"),
      { maxHeight: "500px", opacity: 1 }
    );

    // ------------------------------------- event listener --

    container.addEventListener("click", (event) => {
      var currentContainer = event.currentTarget;
      currentContainer.classList.toggle("is-active");

      if (currentContainer.classList.contains("is-active")) {
        timelineProjectIsActive.timeScale(1).play();
      } else {
        timelineProjectIsActive.timeScale(1).reverse();
      }
    });

    // Add keydown event listener for Esc key to toggle project close
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        container.classList.contains("is-active") &&
        isMouseOver
      ) {
        event.stopPropagation(); // Prevent event from propagating
        container.classList.remove("is-active");
        timelineProjectIsActive.reverse();
      }
    });
  });
});
