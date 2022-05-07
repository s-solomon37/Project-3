var active = 0;
var backButton = document.querySelector("#back");
var nextButton = document.querySelector("#next");
var slides = document.querySelectorAll(".slideshow > div");

function back() {
  var newIndex = active;
  if (active <= 0) {
    newIndex = slides.length - 1;
  } else {
    newIndex--;
  }
  toggle(newIndex, active);
  active = newIndex;
}

function next() {
  var newIndex = active;
  if (active >= slides.length - 1) {
    newIndex = 0;
  } else {
    newIndex++;
  }
  toggle(newIndex, active);
  active = newIndex;
}

backButton.addEventListener("click", back);
nextButton.addEventListener("click", next);

function toggle(to, from) {
  slides[from].classList.remove("active");
  slides[to].classList.add("active");
}
