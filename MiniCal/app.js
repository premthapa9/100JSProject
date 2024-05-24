const months = [
  "January",
  "Februry",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthEl = document.querySelector(".month");
const weekdayEl = document.querySelector(".weekday");
const todayEl = document.querySelector(".today");
const yearEl = document.querySelector(".year");

monthEl.innerText = months[new Date().getMonth()];
weekdayEl.innerText = weekdays[new Date().getDay()];
todayEl.innerText = new Date().getDate();
yearEl.innerText = new Date().getFullYear();
