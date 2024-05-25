const labels = document.querySelectorAll(".feed");
let feedback = "";
const btn = document.querySelector(".btn");

const cont = document.querySelector(".container");
// const checked = document.querySelector("input:checked");
// console.log(checked);
// labels.forEach((element) => {
//   const item = element.querySelector("input");
//   item.addEventListener("change", (e) => {
//     feedback = e.target.getAttribute("id");
//     console.log(feedback);
//   });
// });

btn.addEventListener("click", () => {
  feedback = document.querySelector(
    "input[type='radio'][name=feedback]:checked"
  ).value;
  console.log(
    document.querySelector("input[type='radio'][name=feedback]:checked").value
  );
  if (feedback !== "") {
    cont.innerHTML = `
    <strong>Thank you!</strong>
        <strong>Feedback: ${feedback}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`;
  }
});
