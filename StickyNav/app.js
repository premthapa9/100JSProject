const navel = document.querySelector(".mynav");
const menulist = document.querySelector(".menu");
const section = document.querySelector("section");
window.addEventListener("scroll", () => {
  if (window.scrollY > section.offsetTop - navel.offsetHeight) {
    // scrollY will give you the current y coordination offsettop will with distance from top and offsetheight will give you content height
    navel.classList.add("active");
    menulist.classList.add("active");
  } else {
    navel.classList.remove("active");
    menulist.classList.remove("active");
  }
});
