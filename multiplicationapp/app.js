const form = document.getElementById("form");
const score = document.getElementById("score");
const first = document.getElementById("first");
const second = document.getElementById("second");
const input = document.getElementById("num");
const error = document.querySelector(".error");

let scoreNum = localStorage.getItem("myscore")
  ? localStorage.getItem("myscore")
  : 0;
let rand1, rand2;
function getRandom() {
  return Math.floor(Math.random() * 9) + 1;
}

form.addEventListener("submit", handleSub);

function handleSub(e) {
  e.preventDefault();
  const inputval = +input.value;
  if (inputval <= 0 || isNaN(inputval)) {
    error.innerText = "Please enter the answer.";
  } else {
    error.innerText = "";
    let multval = rand1 * rand2;
    if (inputval === multval) {
      updateRand();
      scoreNum++;
      score.innerText = scoreNum;
      input.value = "";
      localStorage.setItem("myscore", scoreNum);
    } else {
      scoreNum--;
      score.innerText = scoreNum;
      input.value = "";
      localStorage.setItem("myscore", scoreNum);
    }
  }
}

function updateRand() {
  input.focus();
  rand1 = getRandom();
  rand2 = getRandom();

  first.innerText = rand1;
  second.innerText = rand2;
  score.innerText = scoreNum;
}

window.addEventListener("DOMContentLoaded", updateRand);
