var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
var body = document.querySelector("body");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
});