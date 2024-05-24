const form = document.querySelector("form");
const errEL = document.querySelector(".error");
const inputEl = document.querySelector("#query");

const imgContEl = document.querySelector(".img-cont");
const loadEl = document.querySelector(".load");

async function getImage() {
  let query = inputEl.value;
  loadEl.classList.remove("active");
  errEL.innerText = "";
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search/?page=${Math.floor(
        Math.random() * 1000
      )}&per_page=10&query=${query}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json;charset=UTF-",
          Authorization:
            "RYKuph5eAVt1CJb158bL9szl8rcNppBoROorWQfqqu7D51bcng9iqvLq",
        },
      }
    );
    const data = await res.json();
    console.log(data.photos);
    if (data.photos.length > 0) {
      data.photos.map((item) => {
        const div = document.createElement("div");
        div.classList.add("myimg");
        div.innerHTML = `
            <img
          src="${item.src.original}"
          alt="${item.alt}"
        />
        <p class="info">${item.alt}</p>`;
        imgContEl.appendChild(div);
      });
      loadEl.classList.add("active");
    } else {
      imgContEl.innerHTML = "";
      errEL.innerText = "Sorry we are not able to get the image now";
    }
  } catch (err) {
    console.log(err);
    loadEl.classList.remove("active");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  imgContEl.innerHTML = "";
  if (inputEl.value !== "") {
    getImage();
  } else {
    errEL.innerText = "Please enter the search keyword";
    inputEl.focus();
  }
});

loadEl.addEventListener("click", getImage);
