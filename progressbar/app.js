const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");

const bar = document.querySelector(".progress-bar-front");

const allcheck = document.querySelectorAll(".step");

let currentCheck = 1;

nextbtn.addEventListener("click", () => {
  currentCheck++;
  if (currentCheck > allcheck.length) {
    currentCheck = allcheck.length;
  }
  updateDOM();
});

prevbtn.addEventListener("click", () => {
  currentCheck--;
  if (currentCheck < 1) {
    currentCheck = 1;
  }
  updateDOM();
});

function updateDOM() {
  allcheck.forEach((item, ind) => {
    if (ind < currentCheck) {
      item.classList.add("checked");
      item.innerHTML = `
              <i class='fas fa-check'></i>
              <small>${
                ind === 0
                  ? "start"
                  : ind === allcheck.length - 1
                  ? "Final"
                  : "Step" + ind
              }</small>
              `;
    } else {
      item.classList.remove("checked");
      item.innerHTML = `<i class="fas fa-times"></i>`;
    }
  });

  const checkedNum = document.querySelectorAll(".checked");

  bar.style.width =
    ((checkedNum.length - 1) / (allcheck.length - 1)) * 100 + "%";

  if (currentCheck === 1) {
    prevbtn.disabled = true;
  } else if (currentCheck === allcheck.length) {
    nextbtn.disabled = true;
  } else {
    prevbtn.disabled = false;
    nextbtn.disabled = false;
  }
}
