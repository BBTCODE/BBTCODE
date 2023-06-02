//Creating Responsive Navbar

const toggleButtonIcons = document.querySelector(".toggle-icon");
const toggleButtonBars = document.querySelector(".bars");
const toggleButtonTimes = document.querySelector(".times");

const linksContainer = document.querySelector(".links-container");
const navContainer = document.querySelector(".nav-links");

//getBoundaryClientRect();

function toggleIcons() {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const navContainerHeight = navContainer.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${navContainerHeight}px`;
    toggleButtonTimes.style.display = "block";
    toggleButtonBars.style.display = "none";
  } else if (linksContainerHeight === navContainerHeight) {
    linksContainer.style.height = 0;
    toggleButtonTimes.style.display = "none";
    toggleButtonBars.style.display = "block";
  }
}
toggleButtonIcons.addEventListener("click", toggleIcons);

const linkEl = document.querySelectorAll(".link");

linkEl.forEach(function (linkItem) {
  linkItem.addEventListener("click", function (item) {
    linksContainer.style.height = 0;
    toggleButtonBars.style.display = "block";
    toggleButtonTimes.style.display = "none";
  });
});

//Scroll Link

const scrollLink = document.getElementById("home-link");

window.addEventListener("scroll", function () {
  const topLink = window.pageYOffset;
  if (topLink > 500) {
    scrollLink.classList.add("show-link");
  } else {
    scrollLink.classList.remove("show-link");
  }
});

//Text Typing Home Page

const typed = new Typed(".auto-typed", {
  strings: ["haval,"],
  typeSpeed: 220,
  backSpeed: 220,
  loop: true,
});

//Ball Animation

const myselfEl = document.querySelector(".myself");
const switchBtn = document.querySelector(".switch-btn");
const playBall = document.querySelector(".fa-play");
const pauseBall = document.querySelector(".fa-pause");

playBall.addEventListener("click", () => myFunc("play"));
pauseBall.addEventListener("click", () => myFunc("pause"));

const myFunc = (state) => {
  if (state === "play") {
    myselfEl.classList.add("animate");
    playBall.style.display = `none`;
    pauseBall.style.display = `block`;
  }
  else if (state === "pause") {
    myselfEl.classList.remove("animate");
    playBall.style.display = `block`;
    pauseBall.style.display = `none`;
  }
}
var moon = document.getElementById("logo-moon");
 function logomoon() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
   
    moon.src ="images/moon.png"
  }
  else{
    moon.src ="images/sun.png"
  }
}