//make cells by creating and appending divs to the grid container
const container = document.getElementById("container");

function makeCells(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "cell";

    //check if the user wants to draw (mouse held down and inside a cell)
    var mouseIsDown = false
    cell.addEventListener('mousedown', function () { mouseIsDown = true })
    cell.addEventListener('mouseup', function () { mouseIsDown = false })

    cell.addEventListener('mousemove', function(){
      if(mouseIsDown){
          //drawing logic, color a cell
          cell.classList.remove('cell');
          cell.style.backgroundColor = "black";
      }
  })
  }
};



makeCells(16, 16);