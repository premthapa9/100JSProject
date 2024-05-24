const nextEL = document.querySelector(".fa-angles-right");
const prevEl = document.querySelector(".fa-angles-left");

const imgs = document.querySelectorAll("img");
const imgCont = document.querySelector(".container");

let curr = 1;
let timeout;

function updateImge() {
  if (curr > imgs.length) {
    curr = 1;
  } else if (curr < 1) {
    curr = imgs.length;
  }
  imgCont.style.transform = `translateX(-${(curr - 1) * 500}px)`;
  timeout = setTimeout(() => {
    curr++;
    updateImge();
  }, 3000);
}

updateImge();

nextEL.addEventListener("click", () => {
  curr++;
  clearTimeout(timeout);
  updateImge();
});

prevEl.addEventListener("click", () => {
  curr--;
  clearTimeout(timeout);
  updateImge();
});
