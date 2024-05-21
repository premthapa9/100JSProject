const cel = document.getElementById("celval");
const fah = document.getElementById("fahval");
const kel = document.getElementById("kelval");

function convertTemp(temp, type) {
  let celitem, fahitem, kelitem;
  if (type === "cel") {
    fahitem = +temp * 1.8 + 32;

    kelitem = +temp + 273.15;
    fah.value = fahitem.toFixed(2);
    kel.value = kelitem.toFixed(2);
  } else if (type === "fah") {
    celitem = ((+temp - 32) * 5) / 9;
    kelitem = ((+temp - 32) * 5) / 9 + 273.15;
    cel.value = celitem.toFixed(2);
    kel.value = kelitem.toFixed(2);
  } else {
    fahitem = ((+temp - 273.15) * 9) / 5 + 32;
    celitem = +temp - 273.15;

    cel.value = celitem.toFixed(2);
    fah.value = fahitem.toFixed(2);
  }
}

cel.addEventListener("input", () => {
  convertTemp(cel.value, "cel");
});

fah.addEventListener("input", () => {
  convertTemp(fah.value, "fah");
});

kel.addEventListener("input", () => {
  convertTemp(kel.value, "kel");
});
