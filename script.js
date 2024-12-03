gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector("video");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");

ScrollTrigger.create({
  trigger: ".scroll-container",
  start: "top top",
  end: "bottom bottom",
  scrub: 1,
  onUpdate: (self) => {
    if (video.readyState >= 2) {
      video.currentTime = self.progress * video.duration;

      // Show or hide buttons based on video time
      if (video.currentTime >= 5 && video.currentTime < 8) {
        button1.classList.add("active");
      } else {
        button1.classList.remove("active");
      }

      if (video.currentTime >= 11 && video.currentTime < 12) {
        button2.classList.add("active");
      } else {
        button2.classList.remove("active");
      }

      if (video.currentTime >= 14 && video.currentTime < 16) {
        button3.classList.add("active");
      } else {
        button3.classList.remove("active");
      }
      if (video.currentTime >= 31 && video.currentTime < 35) {
        button4.classList.add("active");
      } else {
        button4.classList.remove("active");
      }
      if (video.currentTime >= 46 && video.currentTime < 49) {
        button5.classList.add("active");
      } else {
        button5.classList.remove("active");
      }

      if (video.currentTime >= 50 && video.currentTime < 52) {
        button6.classList.add("active");
      } else {
        button6.classList.remove("active");
      }
      if (video.currentTime >= 53 && video.currentTime < 55) {
        button7.classList.add("active");
      } else {
        button7.classList.remove("active");
      }
      if (video.currentTime >= 55.5 && video.currentTime < 57) {
        button8.classList.add("active");
      } else {
        button8.classList.remove("active");
      }
      if (video.currentTime >= 27 && video.currentTime < 30) {
        button9.classList.add("active");
      } else {
        button9.classList.remove("active");
      }
    }
  },
});

// navbar
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".header");

  // Toggle the navigation visibility
  hamburger.addEventListener("click", () => {
    header.classList.toggle("nav-active");
  });

  // Close other submenus when clicking a nav-item
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents click events from bubbling up
      closeOtherSubmenus(item); // Close other open submenus
      item.classList.toggle("open");
    });
  });

  // Function to close other submenus
  function closeOtherSubmenus(currentItem) {
    document.querySelectorAll(".nav-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("open");
      }
    });
  }
});

document.querySelectorAll(".feature-section").forEach((section) => {
  section.addEventListener("click", () => {
    section.classList.toggle("active");

    if (section.classList.contains("active")) {
      document.querySelectorAll(".feature-section").forEach((s) => {
        if (s !== section) {
          s.classList.remove("active");
        }
      });
    }
  });
});
