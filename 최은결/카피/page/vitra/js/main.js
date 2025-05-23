let menu = document.querySelectorAll(".menu > ul > li > a ");
let sub = document.querySelectorAll(".menuwrap");
menu.forEach(function (v, k) {
  v.onclick = function (e) {
    e.preventDefault();
    sub.classList.add("on");
  };
});
