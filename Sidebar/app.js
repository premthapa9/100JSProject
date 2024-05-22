const hamb = document.getElementById("ham");
const close = document.getElementById("close");

const aside = document.querySelector("aside");

hamb.addEventListener("click", () => {
  aside.classList.toggle("hide");
});

close.addEventListener("click", () => {
  aside.classList.remove("hide");
});
