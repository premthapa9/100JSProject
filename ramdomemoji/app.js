const APIKey =
  "https://emoji-api.com/emojis?access_key=cc3a796b57b47f6b7972c0658d16ad24e22642e6";

const btn = document.getElementById("btn");
const emoname = document.getElementById("emoname");
const errorsec = document.getElementById("error");
let emocoll = [];
async function getEmo() {
  try {
    btn.disabled = true;
    const res = await fetch(APIKey);
    const data = await res.json();

    for (let i = 0; i < 1500; i++) {
      emocoll.push({
        character: data[i].character,
        unicodeName: data[i].unicodeName,
      });
    }
    btn.disabled = false;
  } catch (error) {
    console.log(error);
    errorsec.classList.add("hide");
    setTimeout(() => {
      errorsec.classList.remove("hide");
    }, 2000);
  }
}

getEmo();
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * emocoll.length);

  btn.innerText = emocoll[random].character;
  emoname.innerText = emocoll[random].unicodeName;
});
