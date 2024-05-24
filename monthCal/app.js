const monthEl = document.querySelector(".month");

const fulldateEL = document.querySelector(".fulldate");
const daysEL = document.querySelector(".cale");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

monthEl.innerHTML = `<h1>${months[new Date().getMonth()]}</h1>`;
fulldateEL.innerHTML = `<p>${new Date().toDateString()}</p>`;

const monthInx = new Date().getMonth();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class='empty'></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEL.innerHTML = days;
