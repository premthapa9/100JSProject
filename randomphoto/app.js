const btn = document.querySelector(".btn");

const imgcont = document.querySelector(".img-container");

btn.addEventListener("click", updateDOM);

function updateDOM() {
  let count = 10;
  for (let i = 0; i < count; i++) {
    const imgone = document.createElement("img");
    imgone.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imgcont.appendChild(imgone);
  }
}
