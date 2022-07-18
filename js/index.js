new fullpage("#fullpage", {
  licenseKey: "D3E291AE-D65447D5-84602E0F-3F7962D0",
  sectionsColor: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
  navigation: true,
  navigationPosition: "right",
  navigationTooltips: [
    "Intro",
    "What I do",
    "What I use",
    "What have I build",
    "Where did I work",
    "What others say",
    "Contact me",
  ],
  anchors: [
    "landing",
    "what-i-do",
    "what-i-use",
    "featured-projects",
    "where-did-i-work",
    "what-others-say",
    "contact",
  ],
  responsiveWidth: 800,
});

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splider1", {
    type: "loop",
    autoWidth: true,
    autoplay: false,
    interval: 3000,
    keyboard: "global",
    autoplay: true,
    perMove: 1,
  }).mount();
});

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splider2", {
    type: "loop",
    interval: 3000,
    keyboard: "global",
    autoplay: true,
    perMove: 1,
  }).mount();
});

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splider3", {
    type: "loop",
    autoplay: false,
    interval: 3000,
    keyboard: "global",
    autoplay: true,
    perPage: 2,
    padding: "1rem",
  }).mount();
});
