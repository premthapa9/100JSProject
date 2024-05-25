const labels = document.querySelectorAll(".feed");
let feedback = "";
const btn = document.querySelector(".btn");

const cont = document.querySelector(".container");

labels.forEach((element) => {
  const item = element.querySelector("input");
  item.addEventListener("change", (e) => {
    feedback = e.target.getAttribute("id");
    console.log(feedback);
  });
});

btn.addEventListener("click", () => {
  if (feedback !== "") {
    cont.innerHTML = `
    <strong>Thank you!</strong>
        <strong>Feedback: ${feedback}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`;
  }
});
