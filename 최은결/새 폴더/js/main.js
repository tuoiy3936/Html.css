/*document.addEventListener("mousemove", function (e) {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.backgroundPosition = `${x}% ${y}%`;
});*/

let bgX = 0;

window.addEventListener("wheel", function (e) {
  // 휠의 방향에 따라 배경 위치를 이동
  bgX += e.deltaY * 0.1; // 이동 속도 조절 (0.1~0.5 추천)

  // 범위 제한 (0% ~ 100%)
  bgX = Math.max(0, Math.min(bgX, 100));

  document.body.style.backgroundPosition = `${bgX}% 50%`;
});
