const inputEl = document.getElementById("input");
const insEl = document.getElementById("info");
const resEl = document.getElementById("result");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
const mainContEl = document.querySelector(".maincont");

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    callingApi(e.target.value);
  }
});

async function callingApi(word) {
  try {
    mainContEl.innerHTML = "";
    insEl.innerText = `Searching for the meaning of ${word}`;
    const APIURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const res = await fetch(APIURL);
    const data = await res.json();
    console.log(data);
    if (data.length > 0) {
      insEl.innerText = "";
      mainContEl.style.display = "block";
      data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("result");
        div.setAttribute("id", "result");
        div.innerHTML += `
            <p>My Title: <span class="title" id="title">${word}</span></p>
        <p>${word}: <span class="meaning" id="meaning">${
          item.meanings[0].definitions[0].definition
        }</span></p>
        <audio src="${
          item.phonetics.filter((i) => i.audio !== "")[0].audio
        }" controls id="audio"></audio>
            `;
        mainContEl.appendChild(div);
      });
    } else {
      insEl.innerText = "Sorry not able to find the result now";
    }
  } catch (err) {}
}
