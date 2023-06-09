let container = document.querySelector(".container");
let cell = document.createElement("div");
cell.classList.add("cell");

// Create initial grid 16x16
for (i = 0; i < 256; i++) {
  container.appendChild(cell.cloneNode(true));
}

// Leave a trail of white squares after the mouse hovers
let grid = document.querySelectorAll(".cell");
grid.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "white";
  });
});

// Create button to remove current grid and add a custom grid 1x1 - 100x100
let button = document.querySelector("button");
button.addEventListener("click", () => {
  let answer = prompt("Enter dimensions of grid (1-100)");
  answer = parseInt(answer);
  if (answer < 1 || answer > 100 || isNaN(answer)) {
    answer = prompt("Please enter a valid number 1-100");
    answer = parseInt(answer);
    if (answer < 1 || answer > 100 || isNaN(answer)) {
      alert("Learn how to read the instructions :)");
    }
  }
  if (answer > 0 && answer < 101) {
    newGrid(container, answer, cell);
  }
});

/**
 * This program removes the current grid and adds a new grid according to the user's answer.
 *
 * @param {NodeList} grid - The grid, or "drawing board"
 * @param {HTMLElement} container - The container that consists of the grid
 * @param {number} dimension - The number of squares per side of the grid
 * @param {HTMLElement} cell - A singular square of the grid
 */
function newGrid(container, dimension, cell) {
  let grid = document.querySelectorAll(".cell");
  grid.forEach((square) => {
    square.style.display = "none";
  });
  const cellStyles = getComputedStyle(cell);
  for (i = 0; i < dimension * dimension; i++) {
    const newCell = cell.cloneNode(true);
    newCell.classList.add("cell");
    newCell.style.width = `${600 / dimension - 2}px`;
    newCell.style.height = `${600 / dimension - 2}px`;
    newCell.addEventListener("mouseover", () => {
      newCell.style.backgroundColor = "white";
    });
    container.appendChild(newCell);
  }
}
