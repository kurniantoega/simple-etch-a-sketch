const squareContainer = document.querySelector(".square-container");
const slider = document.getElementById("slider");
const sliderTextValue = document.getElementById("slider-text-value");

// MAKE DEFAULT 16x16 GRID SIZE
createSquare(16);

// MAKE CUSTOM GRID SIZE
sliderTextValue.innerText = `${slider.value} x ${slider.value}`;
slider.addEventListener("input", function () {
  sliderTextValue.innerText = `${slider.value} x ${slider.value}`;
  createSquare(slider.value);
});

function createSquare(squareSize) {
  const squares = squareContainer.querySelectorAll("div");

  squares.forEach((div) => div.remove());

  squareContainer.style.gridTemplateColumns = `repeat(${squareSize}, 1fr)`;
  squareContainer.style.gridTemplateRows = `repeat(${squareSize}, 1fr)`;

  let squareAmount = squareSize * squareSize;

  for (let i = 0; i < squareAmount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.style.border = "1px solid #eee";
    squareContainer.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", changeSquareColor);
  }
}

function changeSquareColor() {
  this.style.backgroundColor = "black";
  this.style.border = "1px solid black";
}

// CLEAR GRID
const clearBtn = document.getElementById("clear-button");

clearBtn.addEventListener("click", function () {
  const squares = squareContainer.querySelectorAll("div");

  squares.forEach((div) => {
    div.style.backgroundColor = "white";
    div.style.border = "1px solid #eee";
  });
});

// RESET ALL
const resetBtn = document.getElementById("reset-button");

resetBtn.addEventListener("click", function () {
  slider.value = "16";
  sliderTextValue.innerText = `${slider.value} x ${slider.value}`;
  createSquare(16);
});
