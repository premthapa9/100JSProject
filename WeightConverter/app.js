const inputval = document.getElementById("weight");
const kgval = document.getElementById("kgitem");
const errorel = document.getElementById("error");
function getKg(pound) {
  return (pound / 2.205).toFixed(2);
}

inputval.addEventListener("input", updateDOM);

function updateDOM() {
  let poundval = inputval.value;

  if (poundval <= 0 || isNaN(poundval)) {
    kgval.innerText = "";
    errorel.classList.add("show");
    setTimeout(() => {
      errorel.classList.remove("show");
    }, 2000);
  } else {
    kgval.innerText = getKg(poundval);
  }
}
