const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorbtn = document.getElementById("scissor");
const resultel = document.getElementById("result");
const ytotalel = document.getElementById("ytotal");
const ctotalel = document.getElementById("ctotal");
const buttons = document.querySelectorAll("button");

const alloption = ["rock", "paper", "scissor"];

let useroption;
let userscore = 0;
let compscore = 0;
function getrandom() {
  return Math.floor(Math.random() * alloption.length);
}

// rockbtn.addEventListener("click", () => {
//   updateResult("rock");
// });

// paperbtn.addEventListener("click", () => {
//   updateResult("paper");
// });

// scissorbtn.addEventListener("click", () => {
//   updateResult("scissor");
// });

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    updateResult(button.id);
  });
});

function validateResult(user, comp) {
  if (user === comp) {
    return `It a tie.`;
  } else if (
    (user === "rock" && comp === "scissor") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissor" && comp === "paper")
  ) {
    userscore++;
    return `You win, ${user} beats ${comp}.`;
  } else if (
    (user === "rock" && comp === "paper") ||
    (user === "paper" && comp === "scissor") ||
    (user === "scissor" && comp === "rock")
  ) {
    compscore++;
    return `You loss, ${comp} beats ${user}`;
  }

  //   if (user === "rock" && comp === "paper") {
  //     compscore++;
  //     return `You loss, ${comp} beats ${user}`;
  //   } else if (user === "rock" && comp === "scissor") {
  //     userscore++;
  //     return `You win, ${user} beats ${user}`;
  //   } else if (user === "rock" && comp === "rock") {
  //     return `It a tie`;
  //   } else if (user === "paper" && comp === "rock") {
  //     userscore++;
  //     return `You win, ${user} beats ${comp}`;
  //   } else if (user === "paper" && comp === "scissor") {
  //     compscore++;
  //     return `You loss, ${comp} beats ${user}`;
  //   } else if (user === "paper" && comp === "paper") {
  //     return `It a tie`;
  //   } else if (user === "scissor" && comp === "rock") {
  //     compscore++;
  //     return `You loss, ${comp} beats ${user}`;
  //   } else if (user === "scissor" && comp === "paper") {
  //     userscore++;
  //     return `You win, ${user} beats ${comp}`;
  //   } else if (user === "scissor" && comp === "scissor") {
  //     return `It a tie`;
  //   }
}

function updateResult(choice) {
  useroption = choice;
  compitem = alloption[getrandom()];
  const item = validateResult(useroption, compitem);
  resultel.innerText = item;
  ytotalel.innerText = userscore;
  ctotalel.innerText = compscore;
}
