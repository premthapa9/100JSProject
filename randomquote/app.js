const apiURL = "https://api.quotable.io/random";

const quoteEl = document.getElementById("quote");
const speakEl = document.getElementById("speaker");

const btnEL = document.getElementById("btn");
const tweetEl = document.getElementById("tweet");

async function getQuote() {
  try {
    btnEL.innerText = "Loading.....";
    btnEL.disabled = true;
    quoteEl.innerText = "Updating....";
    speakEl.innerText = "Updating....";
    let res = await fetch(apiURL);
    let data = await res.json();

    quoteEl.innerText = data.content;
    speakEl.innerText = data.authorSlug;
    btnEL.innerText = "Get A Quote";
    btnEL.disabled = false;
  } catch (err) {
    console.log(err);
    quoteEl.innerText = "An error happened, try again later";
    speakEl.innerText = "An error happened";
    btnEL.innerText = "Get a quote";
    btnEL.disabled = false;
  }
}

getQuote();

function tweet() {
  const title = quoteEl.innerText;
  const auth = speakEl.innerText;
  var tweetUrl =
    "https://twitter.com/intent/tweet?text=" + title + " - " + auth;
  window.open(tweetUrl, "_blank");
}

btnEL.addEventListener("click", getQuote);
tweetEl.addEventListener("click", tweet);
