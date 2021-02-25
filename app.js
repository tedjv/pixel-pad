const container = document.getElementById("container");

//make cells by creating and appending divs to the grid container
function makeCells(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.innerHTML = i + 1;
    container.appendChild(cell).className = "cell";

    //set listeners to check if the user wants to draw
    var mouseIsDown = false
    cell.addEventListener('mousedown', function () { mouseIsDown = true })
    cell.addEventListener('mouseup', function () { mouseIsDown = false })
    cell.addEventListener('mousemove', function () {
      if (mouseIsDown) {
        //color a cell
        cell.style.backgroundColor = "black";

        //color a cell using the value from the color picker
        var color = document.getElementById('paletteColor').value;
        cell.style.backgroundColor = color;

        //erase cells (color white)
        document.getElementById("erase").onclick = function () { eraser() };
        function eraser() {
          document.getElementById('paletteColor').value = "#F5F5F5";
        }
      }
    })
  }
};

//clear grid by coloring all cells white
function clearGrid() {
  let cell = container.children;
  for (i = 0; i < 4096; i++) {
    cell[i].style.backgroundColor = "whitesmoke";
  }
}

//logic used to remove cells from the DOM
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//resize grid by removing all cells then generating a new set
function resize() {
  val = prompt("Enter a number of rows 1-64, this will resize the grid: ");
  parseInt(val);
  removeAllChildNodes(container);
  makeCells(val, val);
}

//generate initial grid size
makeCells(16, 16);