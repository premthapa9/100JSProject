const buttons = document.querySelectorAll(".btn");
const cont = document.querySelector(".right");
const allsub = document.querySelectorAll(".content");

cont.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    allsub.forEach((context) => {
      context.classList.remove("active");
    });
    const el = document.getElementById(id);
    el.classList.add("active");
  }
});
