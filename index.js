const mainNav = document.querySelector(".main-nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");

const navLink = document.querySelector(".nav-link");
const galleryTitle = document.getElementById("title");

hamburgerMenu.addEventListener("click", function() {
  mainNav.classList.toggle("open");
});
navLink.addEventListener("click", function() {
  mainNav.classList.toggle("open");
});

gsap.fromTo('.shaped-box', {
  opacity: 0,
  scale: 0.5,
  duration: 2
}, {
  opacity: 1,
  scale: 1
});
gsap.from('.hamburger-menu', {
  x: -200,
  delay: 2.3
});
gsap.to('.animation',{
  x: 1550,
  delay: 2.5,
  duration: 6
});
gsap.from('#image', {
  opacity: 0,
  scale: 0.5,
  duration: 1.2
});

var t1 = gsap.timeline({repeat:-1});

t1.to("#title",{
  scale: 1.2,
  duration: 2,
  color: "yellow"
})
.to("#title",{
  scale:1,
  duration: 2,
  color: "white"
});
