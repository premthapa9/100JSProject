const btn = document.getElementById("btn");
const mydice = document.getElementById("mydice");
const historyEl = document.getElementById("history");

let history = [];

btn.addEventListener("click", () => {
  const dicecount = getDicecount();

  mydice.innerHTML = getIcon(dicecount);
  mydice.classList.add("show");

  setTimeout(() => {
    mydice.classList.remove("show");
  }, 500);
  history.push(dicecount);

  if (history.length > 0) {
    const ulel = document.createElement("ul");
    ulel.classList.add("list");
    ulel.setAttribute("id", "list");
    history
      .map((item, index) => {
        ulel.innerHTML = `
        <li>
          <strong>Roll <span id="count">${index + 1}</span> : </strong
          >${getIcon(item)}</i>
        </li>
        `;
      })
      .join(" ");

    historyEl.appendChild(ulel);
  }
});

function getDicecount() {
  return Math.floor(Math.random() * 6) + 1;
}

function getIcon(count) {
  switch (count) {
    case 1:
      return `<i class="fa-solid fa-dice-one"></i>`;
      break;
    case 2:
      return `<i class="fa-solid fa-dice-two"></i>`;
      break;
    case 3:
      return `<i class="fa-solid fa-dice-three"></i>`;
      break;
    case 4:
      return `<i class="fa-solid fa-dice-four"></i>`;
      break;
    case 5:
      return `<i class="fa-solid fa-dice-five"></i>`;
      break;
    case 6:
      return `<i class="fa-solid fa-dice-six"></i>`;
      break;
    default:
      return;
  }
}
