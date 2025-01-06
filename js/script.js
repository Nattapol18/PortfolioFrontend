// Progress circular bars
const progressBars = [
  {
    selector: ".html-css",
    valueSelector: ".html-progress",
    startValue: 0,
    endValue: 75,
    speed: 30,
    color: "#1572B6",
  },
  {
    selector: ".javascript",
    valueSelector: ".javascript-progress",
    startValue: 0,
    endValue: 60,
    speed: 30,
    color: "#7d2ae8",
  },
  {
    selector: ".mongodb",
    valueSelector: ".mongodb-progress",
    startValue: 0,
    endValue: 40,
    speed: 30,
    color: "#20c997",
  },
  {
    selector: ".nodejs",
    valueSelector: ".nodejs-progress",
    startValue: 0,
    endValue: 30,
    speed: 30,
    color: "#339933",
  },
  {
    selector: ".python",
    valueSelector: ".python-progress",
    startValue: 0,
    endValue: 60,
    speed: 30,
    color: "#306998",
  },
  {
    selector: ".selenium",
    valueSelector: ".selenium-progress",
    startValue: 0,
    endValue: 60,
    speed: 30,
    color: "#43B02A",
  },
  {
    selector: ".java",
    valueSelector: ".java-progress",
    startValue: 0,
    endValue: 50,
    speed: 30,
    color: " #F89820",
  },
  {
    selector: ".C",
    valueSelector: ".C-progress",
    startValue: 0,
    endValue: 50,
    speed: 30,
    color: "#68217A",
  },
];
progressBars.forEach((bar) => {
  const progressBar = document.querySelector(bar.selector);
  const progressBarValue = document.querySelector(bar.valueSelector);
  let currentValue = bar.startValue;

  const intervalId = setInterval(() => {
    currentValue++;

    progressBarValue.textContent = `${currentValue}%`;
    progressBar.style.background = `conic-gradient(${bar.color} ${currentValue * 3.6}deg, #ededed 0deg)`;

    if (currentValue === bar.endValue) {
      clearInterval(intervalId);
    }
  }, bar.speed);
});
// Filter using JavaScript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});
// JavaScript for sticky navbar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbarHeight + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });
});
// Add functionality to back to top button
const backToTopButton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}
backToTopButton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});