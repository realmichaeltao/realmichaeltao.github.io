"use strict";

window.onscroll = function () {
  myFunction();
};
var navbar = $(".nav");
var sticky = 70;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
}

const SLIDES = $(".slide");
SLIDES.addClass("hidden");
let prevNum = 0;
let nextNum = 0;
showSlide1(0);

$(".lbtn").click(function () {
  prevSlide();
});

$(".rbtn").click(function () {
  console.log("aaaaaaaaaaaa");
  nextSlide();
});

function nextSlide() {
  if (nextNum >= 3) {
    nextNum = 0;
  } else {
    nextNum++;
  }
  prevNum = nextNum;
  showSlide2(nextNum);
}

function prevSlide() {
  if (prevNum <= 0) {
    prevNum = 3;
  } else {
    prevNum--;
  }
  nextNum = prevNum;
  showSlide2(prevNum);
}

function showSlide1(num) {
  let currentSlide = SLIDES.eq(num);
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
}

function showSlide2(num) {
  let currentSlide = SLIDES.eq(num);
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  currentSlide.addClass("fade-in");
}

$("#headshot").hover(
  function () {
    $("#over").removeClass("hidden");
  },
  function () {
    $("#over").addClass("hidden");
  }
);

const allSections = document.querySelectorAll(".subsection");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

document.querySelector(".navlinks").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navlink")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.classList.contains("nonavlink")) {
    window.open(e.target.getAttribute("href"));
  }
});

const welcomeSentences = [
  "Hi, I'm Michael 👋🏻", // English
  "你好，我是Michael 👋🏻", // Chinese
  "Hola, soy Michael 👋🏻", // Spanish
  "こんにちは、マイケル 👋🏻", // Japanese
  "Salut, je suis Michael 👋🏻", // French
  "مرحباً، أنا مايكل 👋🏻", // Arabic
  "Hallo, ich bin Michael 👋🏻", // German
];

const welcome1 = [
  "A learner, a dreamer, and a doer", // English
  "一个学习者，一个梦想家和一个实干家", // Chinese
  "Un aprendiz, un soñador y un hacedor", // Spanish
  "学び、夢想、行動する人", // Japanese
  "Un apprenant, un rêveur et un faiseur", // French
  "متعلم وحالم وفاعل", // Arabic
  "Ein Lerner, ein Träumer und ein Macher", // German
];

const welcome2 = [
  "Welcome to my website!", // English
  "欢迎来到我的网站！", // Chinese
  "¡Bienvenido a mi sitio web!", // Spanish
  "私のウェブサイトへようこそ！", // Japanese
  "Bienvenue sur mon site web!", // French
  "مرحبًا بك في موقعي!", // Arabic
  "Willkommen auf meiner Website!", // German
];

const scrollContent1 = document.getElementById("intro");
const scrollContent2 = document.getElementById("intro1");
const scrollContent3 = document.getElementById("intro2");
let currentIndex = 0;

function displayWelcomeSentence() {
  scrollContent1.textContent = welcomeSentences[currentIndex];
  scrollContent2.textContent = welcome1[currentIndex];
  scrollContent3.textContent = welcome2[currentIndex];
  currentIndex = (currentIndex + 1) % welcomeSentences.length;
  scrollContent1.style.opacity = 1;
  scrollContent2.style.opacity = 0;
  scrollContent3.style.opacity = 0;

  setTimeout(() => {
    scrollContent2.style.opacity = 1;
    scrollContent3.style.opacity = 1;
  }, 1500);

  setTimeout(() => {
    scrollContent1.style.opacity = 0;
    scrollContent2.style.opacity = 0;
    scrollContent3.style.opacity = 0;
  }, 4000);
}
displayWelcomeSentence();

setInterval(displayWelcomeSentence, 5500);
