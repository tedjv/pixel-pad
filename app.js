const container = document.getElementById("container");


//make cells by creating and appending divs to the grid container
function makeCells(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
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
        let color = document.getElementById('paletteColor').value;
        cell.style.backgroundColor = color;

      }
    })
  }
};

//generate initial grid size
makeCells(16, 16);

