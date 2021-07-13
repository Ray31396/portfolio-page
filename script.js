//! This is the hamburger menu stuff//

// const nav = document.querySelector(".nav");
// const navHamburger = document.querySelector(".nav___hamburger");
// const hamburgerLines = document.getElementsByClassName("nav___hamburger-line");
// const navItems = document.querySelector(".nav___items");

// document.addEventListener("click", (e) => {
//   if (e.target === nav) {
//     nav.ariaPressed = nav.ariaPressed === "false" ? "true" : "false";
//     navItems.classList.toggle("hideItems");
//     Array.from(hamburgerLines).forEach((line, x) => {
//       line.classList.toggle(`line-${x + 1}`);
//     });
//   }
// });

const smileIcon = document.querySelector(".fa-smile-beam");
const smileA = document.querySelector(".smile");

smileA.addEventListener("pointerover", () => {
  smileIcon.classList.replace("fa-smile-beam", "fa-grimace");
});

smileA.addEventListener("pointerout", () => {
  smileIcon.classList.replace("fa-grimace", "fa-smile-beam");
});
