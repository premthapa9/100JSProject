const btn = document.querySelector(".btn");
const error = document.querySelector(".error");

const cont = document.querySelector(".img-cont");

const inputval = document.querySelector("#number");

async function getData() {
  error.style.display = "none";
  let imgper = inputval.value;
  console.log(imgper);
  try {
    cont.innerHTML = "";
    btn.style.display = "none";
    const res = await fetch(
      `https://api.pexels.com/v1/curated?page=${Math.round(
        Math.random() * 30
      )}&per_page=${imgper}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          Authorization:
            "RYKuph5eAVt1CJb158bL9szl8rcNppBoROorWQfqqu7D51bcng9iqvLq",
        },
      }
    );

    const data = await res.json();
    if (data) {
      inputval.value = "";
      console.log(data);
      btn.style.display = "block";
      data.photos.forEach((item) => {
        console.log(item);
        let contone = document.createElement("div");
        contone.classList.add("img-list");
        contone.innerHTML += `
        <img src=${item.src.original} alt="img"/>
        <p>By ${item.photographer}</p>`;
        cont.appendChild(contone);
      });
    }
  } catch (err) {
    console.log(error);
  }
}

btn.addEventListener("click", () => {
  const imgcount = inputval.value;
  if (imgcount > 0 && imgcount < 11) {
    getData();
  } else {
    error.style.display = "block";
    cont.innerHTML = "";
  }
});
