const showmodal = document.getElementById("btn");
const closemodal = document.getElementById("close");
const modal = document.querySelector(".modelout");

showmodal.addEventListener("click", () => {
  modal.classList.add("show");
});

closemodal.addEventListener("click", () => {
  modal.classList.remove("show");
});
