const initEl = document.getElementById("mainitem");
const p = document.querySelector(".initial");
const menuEl = document.getElementById("menulist");

const alllist = document.querySelectorAll("#menulist li");

initEl.addEventListener("click", () => {
  menuEl.classList.toggle("hide");
  initEl.classList.toggle("hide");
});

alllist.forEach((list) => {
  list.addEventListener("click", () => {
    p.innerHTML = list.innerHTML;
    menuEl.classList.toggle("hide");
    initEl.classList.toggle("hide");
  });
});
