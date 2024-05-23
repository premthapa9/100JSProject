const allnums = document.querySelectorAll(".num");

let interval = 2000;

allnums.forEach((num) => {
  let start = 0;
  let endval = parseInt(num.getAttribute("data-val"));
  let duration = Math.floor(interval / endval);

  let counter = setInterval(() => {
    start += 1;
    num.innerText = start;
    if (start == endval) {
      clearInterval(counter);
    }
  }, duration);
});
