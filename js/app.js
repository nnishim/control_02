var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
var body = document.querySelector("body");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
});
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}