const canvas = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
const changeSizeButton = document.querySelector("#change-size");
const widthInput = document.querySelector("#width-box");
const heightInput = document.querySelector("#height-box");

// Default settings

makeCanvas(16, 16);
fillCell();



// Creating the canvas for drawing

function makeCanvas(x, y) {
  canvas.style.setProperty("--grid-cols", x);
  canvas.style.setProperty("--grid-rows", y);
  for (let i = 0; i < x * y; i++) {
    let cell = document.createElement("div");
    canvas.appendChild(cell).className = "cell";
  }
}

// Adding a "fill" class to each cell so the background on the cell changes

function fillCell() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function() {
      cell.classList.add("fill");
    });
  });
};

// Reset the canvas

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("fill");
  });
  fillCell();
};

// Changing the size of the canvas

changeSizeButton.addEventListener("click", function() {
  changeSize();
});


function changeSize() {
  reset();
  makeCanvas(widthInput.valueAsNumber, heightInput.valueAsNumber);
  fillCell();
};







