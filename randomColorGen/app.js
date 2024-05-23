window.addEventListener("DOMContentLoaded", loadItemDOM);

let containerCount = 30;
let colorCombo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandom() {
  return Math.floor(Math.random() * colorCombo.length);
}
function loadItemDOM() {
  for (let i = 1; i < containerCount; i++) {
    const div = document.createElement("div");
    div.classList.add("mydiv");
    let pass = "#";
    for (let j = 0; j < 6; j++) {
      pass += colorCombo[getRandom()];
    }
    div.innerText = pass;
    div.style.backgroundColor = pass;
    document.querySelector(".container").appendChild(div);
  }
}
