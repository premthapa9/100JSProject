const errormes = document.getElementById("error"),
  formname = document.getElementById("form"),
  amount = document.getElementById("amount"),
  percent = document.getElementById("percentage"),
  total = document.getElementById("total");

formname.addEventListener("submit", (e) => {
  e.preventDefault();
  // check the value of amount and percent

  const mybill = +amount.value;
  const mypercent = +percent.value;

  // Check if the amount and percentage is not empty
  if (!mybill || !mypercent) {
    errormes.innerText = "Please Enter both the amount and percentage";
    total.innerText = 0;
  } else {
    errormes.innerHTML = "";
    let tipamount = (mypercent * mybill) / 100;
    total.innerText = tipamount + mybill;
  }
});
