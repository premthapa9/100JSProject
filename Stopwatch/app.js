const hrsel = document.getElementById("hrs");
const minel = document.getElementById("mins");
const secel = document.getElementById("sec");
const miliel = document.getElementById("milisec");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const restartBtn = document.getElementById("restart");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    formattime(elapsedTime);
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

startBtn.addEventListener("click", startTimer);

function formattime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  hrsel.textContent = hours > 9 ? hours : "0" + hours;
  minel.textContent = minutes > 9 ? minutes : "0" + minutes;
  secel.textContent = seconds > 9 ? seconds : "0" + seconds;
  miliel.textContent =
    milliseconds > 9 ? "." + milliseconds : ".0" + milliseconds;
}

stopBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

restartBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
  startTime = 0;
  elapsedTime = 0;
  hrsel.textContent = "00";
  minel.textContent = "00";
  secel.textContent = "00";
  miliel.textContent = "";
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
