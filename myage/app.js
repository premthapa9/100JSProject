const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("#age");
const formEL = document.querySelector("form");
const displayEl = document.querySelector("#result");

const myBday = new Date();

console.log(myBday.getFullYear());

formEL.addEventListener("submit", (e) => {
  e.preventDefault();
  displayEl.innerHTML = "";
  const age = inputEl.value;
  const year = myBday.getFullYear() - age;
  const elone = document.createElement("h1");
  elone.textContent = `You are ${year} years old.`;
  displayEl.appendChild(elone);
  inputEl.value = "";
});
