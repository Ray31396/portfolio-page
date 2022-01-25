const aboutHead = document.querySelector(".card___body-top"),
  aboutBody = document.getElementsByClassName("card___body")[0],
  fullTxt = document.querySelector(".full"),
  tldrTxt = document.querySelector(".tldr"),
  aboutImg = document.querySelector(".card___image"),
  slider = document.querySelector(".slider"),
  sliderBall = document.querySelector(".slider___ball"),
  sliderText = document.querySelector(".slider___text")

Array.from(document.querySelectorAll(".pr-nums button")).forEach((btn) =>
  btn.addEventListener("pointerup", (e) => {
    const { id } = e.target
    document.activeElement.blur()
    let openedProject = document.querySelector(
      ".projects-flex-wrap > div[id]:not(div.hide)"
    )
    openedProject.classList.add("hide")
    let div = document.getElementById(`${id.split("-")[0]}`)
    if (div.classList.contains("hide")) {
      div.classList.remove("hide")
    }
  })
)

slider.addEventListener(
  "pointerup",
  (e) => {
    e.preventDefault()
    aboutBody.classList.remove("anim")
    void aboutBody.offsetWidth
    aboutBody.classList.add("anim")
    sliderBall.classList.toggle("slide")
    sliderText.classList.toggle("to-right")
    sliderText.classList.remove("anim")
    void aboutBody.offsetWidth
    sliderText.classList.add("anim")
    if (!sliderBall.classList.contains("slide")) {
      sliderText.innerText = "full"
      tldrTxt.classList.add("hide")
      fullTxt.classList.remove("hide")
      aboutImg.classList.remove("hide")
      Array.from(aboutHead.children).forEach((element) => {
        element.style.setProperty("text-align", "center")
      })
    } else {
      sliderText.innerText = "tldr"
      tldrTxt.classList.remove("hide")
      fullTxt.classList.add("hide")
      aboutImg.classList.add("hide")
      Array.from(aboutHead.children).forEach((element) => {
        element.style.setProperty("text-align", "left")
      })
    }
  },
  false
)
