const xcod = document.querySelector(".countx");
const ycod = document.querySelector(".county");

window.addEventListener("mousemove", (e) => {
  xcod.innerText = e.clientX;
  ycod.innerText = e.clientY;
});
