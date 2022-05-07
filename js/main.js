var active = 0;
var backButton = document.querySelector("#back");
var nextButton = document.querySelector("#next");
var slides = document.querySelectorAll(".slideshow > div");

function previous() {
  if (active <= 0) {
    active = slides.length - 1;
  } else {
    active--;
  }
  console.log(active);
}

function next() {
  active++;
  console.log(active);
}

backButton.addEventListener("click", back);
nextButton.addEventListener("click", next);

function toggle(to, from) {
  slides[from].classList.remove("active");
  slides[to].classList.add("active");
}
