//active navbar
let nav = document.querySelector(".navbar.scroll");
function handleNavbarScroll() {
  if (window.innerWidth < 992) {
    if(window.scrollY > 20){
      nav.classList.add("scroll-on");
    } else {
      nav.classList.remove("scroll-on");
    }
  } else {
    nav.classList.remove("scroll-on");
  }
}
window.addEventListener("scroll", handleNavbarScroll);
window.addEventListener("resize", handleNavbarScroll);

// nav hide when click 

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".testimonialSwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
  });
});
