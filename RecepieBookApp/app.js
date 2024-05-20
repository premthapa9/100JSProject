const searchkey = document.getElementById("searchkey");
const form = document.getElementById("form");
const random = document.getElementById("random");
const toast = document.querySelector(".toast");
const title = document.querySelector(".srctitle");
const meals = document.getElementById("meals");
const singleMeal = document.getElementById("details");
let mealslist = [];

// Check the form and call the endpoint
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if the input is empty or not
  let inputval = searchkey.value;

  if (inputval === "") {
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  } else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputval}`)
      .then((res) => res.json())
      .then((data) => {
        meals.innerHTML = "";
        singleMeal.innerHTML = "";
        document.getElementById("searchcont").style.display = "block";
        let mealscol = data.meals;
        title.innerText = `You search result for '${inputval}':`;

        mealscol.forEach((meal) => {
          const mealcont = document.createElement("div");
          mealcont.classList.add("meal");
          mealcont.setAttribute("id", "meal");

          mealcont.innerHTML = `
            <img
            id="mealimg"
            class="mealimg"
            src="${meal.strMealThumb}"
            alt="meal"
          />
          <div class="mealinfo" id="mealinfo" data-mealID='${meal.idMeal}'>
            <p >${meal.strMeal}</p>
          </div>
            `;
          meals.appendChild(mealcont);
        });
      })
      .catch((err) => (title.innerText = `No result found for '${inputval}'`));
  }
  searchkey.value = "";
});

// Function for the single
meals.addEventListener("click", (e) => {
  const mealinfo = e.composedPath().find((item) => {
    if (item.classList) {
      return item.classList.contains("mealinfo");
    } else {
      return false;
    }
  });
  if (mealinfo) {
    const mealid = mealinfo.getAttribute("data-mealID");
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res) => res.json())
      .then((data) => {
        let fooddata = data.meals[0];
        let ingre = [];
        for (let i = 1; i <= 20; i++) {
          if (fooddata[`strIngredient${i}`]) {
            ingre.push(
              `${fooddata[`strIngredient${i}`]} - ${fooddata[`strMeasure${i}`]}`
            );
          } else {
            break;
          }
        }

        singleMeal.innerHTML = `
        <h1 class="title" id="title">${fooddata.strMeal}</h1>
      <div class="imgcont" id="imgcont">
        <img
          src="${fooddata.strMealThumb}"
          alt="mealdetails"
        />
      </div>
      <div class="cate" id="cate">
        <p>${fooddata.strArea}</p>
        <p>${fooddata.strCategory}</p>
      </div>
      <p class="about" id="about">
        ${fooddata.strInstructions}
      </p>
      <h1 class="ing">Ingredients</h1>
      <ul class="ingredients">
      ${ingre.map((ing) => `<li>${ing}</li>`).join(" ")}
        
      </ul>
        `;
      });
  }
});

random.addEventListener("click", () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      let fooddata = data.meals[0];
      let ingre = [];
      for (let i = 1; i <= 20; i++) {
        if (fooddata[`strIngredient${i}`]) {
          ingre.push(
            `${fooddata[`strIngredient${i}`]} - ${fooddata[`strMeasure${i}`]}`
          );
        } else {
          break;
        }
      }
      title.innerHTML = "";
      meals.innerHTML = "";
      document.getElementById("searchcont").style.display = "none";
      singleMeal.innerHTML = `
        <h1 class="title" id="title">${fooddata.strMeal}</h1>
      <div class="imgcont" id="imgcont">
        <img
          src="${fooddata.strMealThumb}"
          alt="mealdetails"
        />
      </div>
      <div class="cate" id="cate">
        <p>${fooddata.strArea}</p>
        <p>${fooddata.strCategory}</p>
      </div>
      <p class="about" id="about">
        ${fooddata.strInstructions}
      </p>
      <h1 class="ing">Ingredients</h1>
      <ul class="ingredients">
      ${ingre.map((ing) => `<li>${ing}</li>`).join(" ")}
        
      </ul>
        `;
    });
});
