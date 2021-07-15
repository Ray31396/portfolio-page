import { fullAbout, tldrAbout } from "/about_txt.js";
const smileIcon = document.querySelector(".fa-smile-beam");
const smileA = document.querySelector(".smile");
const togLabel = document.querySelector(".switch");
const togBtn = document.querySelector("#togBtn");
const aboutText = document.getElementsByClassName("card___body-bottom")[0];

window.onload = (event) => {
  aboutText.innerHTML = fullAbout;
};

smileA.addEventListener("pointerover", () => {
  smileIcon.classList.replace("fa-smile-beam", "fa-grimace");
});

smileA.addEventListener("pointerout", () => {
  smileIcon.classList.replace("fa-grimace", "fa-smile-beam");
});

togLabel.addEventListener(
  "pointerup",
  (e) => {
    e.preventDefault();
    aboutText.classList.remove("anim");
    void aboutText.offsetWidth;
    aboutText.classList.add("anim");
    if (togBtn.checked) {
      aboutText.innerHTML = fullAbout;
    } else {
      aboutText.innerHTML = tldrAbout;
    }
  },
  false
);
