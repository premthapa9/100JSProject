const input = document.getElementById("mychar");
const totalval = document.getElementById("total");
const remval = document.getElementById("rem");

let remain = 100;
let totalchar = 0;

input.addEventListener("input", () => {
  let mychar = input.value;

  totalval.innerText = mychar.length;
  remval.innerText = remain - mychar.length;
});
