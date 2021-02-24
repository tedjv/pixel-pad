//make cells by creating and appending divs to the grid container
const container = document.getElementById("container");

function makeCells(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "cell";
  };
};

makeCells(16, 16);