let container = document.querySelector(".container");
let cell = document.createElement("div");
cell.classList.add("cell");

for (i = 0; i < 256; i++) {
  container.appendChild(cell.cloneNode(true));
}

let grid = document.querySelectorAll(".cell");
grid.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "white";
  });
});
