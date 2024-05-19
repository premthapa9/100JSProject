const form = document.getElementById("form");
const errmess = document.getElementById("error");
const dob = document.getElementById("dob");

const year = document.getElementById("age");

dob.setAttribute("max", currentDate());

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dobval = dob.value;
  if (!isNaN(dobval)) {
    errmess.innerText = "Please enter your DOB";
  } else {
    errmess.innerText = "";
    let dobyear = new Date(`'${dobval}'`).getFullYear();
    let curryear = new Date().getFullYear();
    let finalyear = curryear - dobyear;
    year.innerText = finalyear;
  }
});

function currentDate() {
  return `${new Date().getFullYear()}-${
    new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1
  }-${new Date().getDate()}`;
}
