const percentEl = document.getElementById("count");

const hrEL = document.querySelector(".front");

let duration = 2000;
let start = 0;
let myper = 100;

window.addEventListener("DOMContentLoaded", () => {
  let mygap = duration / myper;
  let counter = setInterval(() => {
    start++;
    hrEL.style.width = start + "%";
    percentEl.innerText = start;
    if (start == myper) {
      clearInterval(counter);
    }
  }, mygap);
});
