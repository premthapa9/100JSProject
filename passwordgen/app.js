const input = document.getElementById("pass");
const btn = document.getElementById("btn");
const altcont = document.querySelector(".alert-cont");
const copy = document.querySelector(".fa-copy");
const message = document.getElementById("mess");

btn.addEventListener("click", () => {
  const char =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const count = 14;
  let password = "";
  for (let i = 0; i < count; i++) {
    let random = Math.floor(Math.random() * char.length);
    password += char.substring(random, random + 1);
  }
  input.value = password;
  message.innerText = password + "   copied!";
});

copy.addEventListener("click", () => {
  if (input.value) {
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
    altcont.classList.add("hide");
    setTimeout(() => {
      altcont.classList.remove("hide");
    }, 2000);
  } else {
    message.innerText = "Please generate the password";
    altcont.classList.add("hide");
    setTimeout(() => {
      altcont.classList.remove("hide");
    }, 2000);
  }
});
