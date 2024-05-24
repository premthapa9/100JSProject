const form = document.getElementById("form");
const depositEL = document.getElementById("depost");
const rateEL = document.getElementById("rate");
const monthEL = document.getElementById("months");
const errEL = document.querySelector(".error");
const totalEL = document.getElementById("totao");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const depval = +depositEL.value;
  const rateval = +rateEL.value;
  const monthval = +monthEL.value;
  if (
    (depval > 0 || isNaN(depval)) &&
    (rateval > 0 || isNaN(rateval)) &&
    (monthval > 0 || isNaN(monthval))
  ) {
    errEL.innerText = "";
    let totalone = depval / monthval + (depval / monthval) * (rateval / 100);
    totalEL.innerText = totalone.toFixed(2);
  } else {
    errEL.innerText = "Please enter all mandatory field.";
    totalEL.innerText = "";
  }
}
