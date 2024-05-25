const sounds = ["crash", "kick", "snare", "tom"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.style.background = "url(images/" + sound + ".png)";
  btn.style.backgroundPosition = "cover";

  btn.addEventListener("click", () => {
    const item = document.getElementById(sound);

    // stopSong();
    item.currentTime = 0; // Either top or bot we can use
    item.play();
  });
  document.querySelector(".musiccont").appendChild(btn);
});

function stopSong() {
  sounds.forEach((sound) => {
    const item = document.getElementById(sound);
    item.pause();
    sound.currentTime = 0;
  });
}
