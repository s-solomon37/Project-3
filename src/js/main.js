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

var answers = [];

function answer(letter) {
  answers.push(letter);
  console.log(answers);
}

function summary() {
  let as = answers.filter((letter) => letter === "a");
  let bs = answers.filter((letter) => letter === "b");
  let cs = answers.filter((letter) => letter === "c");
  let ds = answers.filter((letter) => letter === "d");
  console.log({
    a: as.length,
    b: bs.length,
    c: cs.length,
    d: ds.length,
  });
}
