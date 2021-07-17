import { fullAbout, tldrAbout } from "./about_txt.js";
const smileIcon = document.querySelector(".fa-smile-beam");
const smileA = document.querySelector(".smile");
const togLabel = document.querySelector(".switch");
const togSlider = document.querySelector(".slider");
const togBtn = document.querySelector("#togBtn");
const aboutBody = document.getElementsByClassName("card___body")[0];
const aboutHead = document.querySelector(".card___body-top-text");
const aboutText = document.getElementsByClassName("card___body-bottom")[0];
const aboutImg = document.querySelector(".card___image");
const currentlyChecked = togBtn.checked;

console.log(togBtn.checked);

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
    if (togBtn.checked === currentlyChecked) {
      break
    }
    e.preventDefault();
    aboutBody.classList.remove("anim");
    void aboutBody.offsetWidth;
    aboutBody.classList.add("anim");
    currentlyChecked = togBtn.checked;
    if (togBtn.checked) {
      aboutText.innerHTML = fullAbout;
      aboutText.style.margin = "0 auto";
      aboutImg.classList.remove("hide");
      aboutHead.querySelectorAll(":scope > *").forEach((element) => {
        element.style.textAlign = "center";
      });
    } else {
      aboutText.innerHTML = tldrAbout;
      aboutText.style.margin = "unset";
      aboutImg.classList.add("hide");
      aboutHead.querySelectorAll(":scope > *").forEach((element) => {
        element.style.textAlign = "left";
      });
    }
  },
  false
);
