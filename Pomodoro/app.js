const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");
const minval = document.getElementById("minsval");
const secval = document.getElementById("secsval");
const closebtn = document.querySelector(".fa-xmark");
const modal = document.querySelector(".modalout");

let time = 1500;
let interval;

function startTimer() {
  interval = setInterval(() => {
    time--;
    updatetime();
    if (time === 0) {
      clearInterval(interval);
      time = 1500;
      updatetime();
      modal.classList.add("show");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  time = 1500;
  updatetime();
}

function updatetime() {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  minval.innerText = min;
  secval.innerText = sec < 10 ? "0" + sec : sec;
}

btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);
closebtn.addEventListener("click", () => modal.classList.remove("show"));
