const emocollEl = document.querySelectorAll(".far");
const starcollEl = document.querySelectorAll(".fa-star");

const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

function updateDOM(ind) {
  starcollEl.forEach((star, i) => {
    if (i < ind + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });

  emocollEl.forEach((emo) => {
    emo.style.transform = `translateX(-${ind * 50}px)`;
    emo.style.color = colorsArray[ind];
  });
}

updateDOM(0);

starcollEl.forEach((star, ind) => {
  star.addEventListener("click", () => {
    updateDOM(ind);
  });
});
