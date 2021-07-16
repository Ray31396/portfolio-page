import { fullAbout, tldrAbout } from "./about_txt.js";
const smileIcon = document.querySelector(".fa-smile-beam");
const smileA = document.querySelector(".smile");
const togLabel = document.querySelector(".switch");
const togBtn = document.querySelector("#togBtn");
const aboutBody = document.getElementsByClassName("card___body")[0];
const aboutHead = document
  .querySelector(".card___body-top-text")
  .querySelectorAll(":scope > *");
const aboutText = document.getElementsByClassName("card___body-bottom")[0];
const aboutImg = document.querySelector(".card___image");

console.log(aboutHead);

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
    aboutBody.classList.remove("anim");
    void aboutBody.offsetWidth;
    aboutBody.classList.add("anim");
    if (togBtn.checked) {
      aboutText.innerHTML = fullAbout;
      aboutText.style.margin = "0 auto";
      aboutImg.classList.remove("hide");
      aboutHead.forEach((element) => {
        element.style.textAlign = "center";
      });
    } else {
      aboutText.innerHTML = tldrAbout;
      aboutText.style.margin = "initial";
      aboutImg.classList.add("hide");
      aboutHead.forEach((element) => {
        element.style.textAlign = "left";
      });
    }
  },
  false
);
