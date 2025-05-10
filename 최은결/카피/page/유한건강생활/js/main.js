let page = document.querySelectorAll(".slidePage > div");
let txt = document.querySelectorAll(".txt > div");
txt[0].querySelector("h1").classList.add("on", "active");
function myfnc() {
  page.forEach(function (v, k) {
    v.classList.remove("on");
  });
  txt.forEach(function (v, k) {
    v.querySelector("h1").classList.remove("on");
  });
}
var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      myfnc();
      page[this.realIndex].classList.add("on");
      txt[this.realIndex].querySelector("h1").classList.add("on");
    },
  },
});
