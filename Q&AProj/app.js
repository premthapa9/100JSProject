// const btns = document.querySelectorAll(".btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const item = e.currentTarget.parentElement.parentElement;
//     item.classList.toggle("active");
//   });
// });

const allcont = document.querySelectorAll(".question-cont");

allcont.forEach((ques) => {
  const btn = ques.querySelector(".btn");

  btn.addEventListener("click", (e) => {
    allcont.forEach((item) => {
      if (item !== ques) {
        item.classList.remove("active");
      }
    });
    ques.classList.toggle("active");
  });
});
