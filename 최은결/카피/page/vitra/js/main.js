document.querySelectorAll(".menu > ul > li").forEach(function (v, k) {
  v.onmouseEntet = function () {
    document.querySelectorAll(".menuwrap")[k].classList.add("on");
  };
});
