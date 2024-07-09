import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMcheck");

  var wholeProjectContainers = document.querySelectorAll(
    ".project-container-whole"
  );

  wholeProjectContainers.forEach((container) => {
    // Track if the mouse is over the container
    let isMouseOver = false;

    // ------------------------------------- timelines --
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
    var videoPlayer = container.querySelector(".video-player");
    var youtubeIframe = container.querySelector(".youtube-iframe");

    // Check if each element exists before proceeding
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
      document.querySelector(".project-titles"),
      { top: "0", duration: 0.5 },
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
      { height: "500px" },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".project-img-container"),
      { top: "60px", maxHeight: "500px" },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".cache-img"),
      { top: "60px", maxHeight: "500px" },
      "<"
    );

    timelineProjectIsActive.to(
      container.querySelector(".project-text"),
      { top: "60px", maxHeight: "500px" },
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

    timelineProjectIsActive.to(container.querySelectorAll(".extend-child"), {
      opacity: "1",
      stagger: 0.3,
    });

    timelineProjectIsActive.to(
      container.querySelector(".project-media-button"),
      { maxHeight: "500px", opacity: 1 }
    );

    // ------------------------------------- event listener --
    container.addEventListener("click", (event) => {
      var currentContainer = event.currentTarget;
      currentContainer.classList.toggle("is-active");

      if (currentContainer.classList.contains("is-active")) {
        timelineProjectIsActive.play();
      } else {
        timelineProjectIsActive.reverse();
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
