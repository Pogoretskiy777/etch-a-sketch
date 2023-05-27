let container = document.querySelector(".container");
let cell = document.createElement("div");
cell.classList.add("cell");

for (i = 0; i < 256; i++) {
  container.appendChild(cell.cloneNode(true));
}
