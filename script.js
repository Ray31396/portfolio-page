import { fullAbout, tldrAbout } from "./about_txt.js";
const smileIcon = document.querySelector(".fa-smile-beam");
const smileA = document.querySelector(".smile");
const aboutHead = document.querySelector(".about-card-head");
const aboutBody = document.getElementsByClassName("card___body")[0];
const aboutText = document.getElementsByClassName("card___body-bottom")[0];
const aboutImg = document.querySelector(".card___image");
const slider = document.querySelector(".slider");
const sliderBall = document.querySelector(".slider___ball");
const sliderText = document.querySelector(".slider___text");

window.onload = (event) => {
  aboutText.innerHTML = fullAbout;
};

smileA.addEventListener("pointerover", () => {
  smileIcon.classList.replace("fa-smile-beam", "fa-grimace");
});

smileA.addEventListener("pointerout", () => {
  smileIcon.classList.replace("fa-grimace", "fa-smile-beam");
});

slider.addEventListener(
  "pointerup",
  (e) => {
    e.preventDefault();
    aboutBody.classList.remove("anim");
    void aboutBody.offsetWidth;
    aboutBody.classList.add("anim");
    sliderBall.classList.toggle("slide");
    sliderText.classList.toggle("to-right");
    sliderText.classList.remove("anim");
    void aboutBody.offsetWidth;
    sliderText.classList.add("anim");
    if (!sliderBall.classList.contains("slide")) {
      sliderText.innerHTML = "full";
      aboutText.innerHTML = fullAbout;
      aboutText.style.setProperty("margin", "0 auto");
      aboutImg.classList.remove("hide");
      aboutHead.querySelectorAll(":scope > *").forEach((element) => {
        element.style.setProperty("text-align", "center");
      });
    } else {
      sliderText.innerHTML = "tldr";
      aboutText.innerHTML = tldrAbout;
      aboutText.style.setProperty("margin", "unset");
      aboutImg.classList.add("hide");
      aboutHead.querySelectorAll(":scope > *").forEach((element) => {
        element.style.setProperty("text-align", "left");
      });
    }
  },
  false
);
