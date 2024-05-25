document.body.addEventListener("mousemove", (e) => {
  const posx = e.offsetX;
  const posy = e.offsetY;
  console.log(posx, posy);
  const ele = document.createElement("span");
  ele.style.left = posx + "px";
  ele.style.top = posy + "px";
  const size = Math.random() * 100;
  ele.style.width = size + "px";
  ele.style.height = size + "px";

  document.body.appendChild(ele);
  setTimeout(() => {
    ele.remove();
  }, 3000);
});
