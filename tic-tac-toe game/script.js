const container = document.querySelectorAll(".grids");

const gameContainer = document.querySelector(".game-container");

const popupContainer = document.querySelector(".popup-container");
const popupWinner = document.querySelector(".popup-text-1");
const popupDraw = document.querySelector(".popup-text-2");

const btnBox = document.querySelector(".btn-box");
document.querySelector(".btn-o").disabled = false;
document.querySelector(".btn-x").disabled = false;

POSSIBILITIES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const newCont = Array.from(container);
console.log(newCont);
//to get the grid indexs
const getGrid = (Id) => newCont[Id - 1];

//To get the content of the grid
const getGridContent = (identity) => getGrid(identity).innerText;
//To check for win
const checkWin = (indexes, letter) =>
  indexes.every((identity) => getGridContent(identity) === letter);

//TO check for win from the posibilities
const checkWinAll = (letter) =>
  POSSIBILITIES.some((indexes) => checkWin(indexes, letter));

const displayWinner = (winner) => {
  popupContainer.style.visibility = "visible";
  popupContainer.style.opacity = 1;
  popupWinner.innerText = winner;
};

btnBox.addEventListener("click", function (event) {
  // event.target.disabled = true;
  // event.target.style.borderBottom = "4px solid #555";
  if (event.target.innerText === "x") {
    currentLetter = "o";
    return;
  } else if (event.target.innerText === "o") {
    currentLetter = "x";
    return;
  }
});

let currentLetter;

gameContainer.addEventListener("click", function (event) {
  console.log(`button clicked -- `, event.target);

  currentLetter = currentLetter === "x" ? "o" : "x";

  const btnTarget = event.target;
  if (btnTarget.textContent === "") btnTarget.textContent = currentLetter;
  else return;

  if (checkWinAll("X")) {
    console.log("X has won");
    displayWinner("X");
    return;
  }

  if (checkWinAll("O")) {
    console.log("O has won");
    displayWinner("O");
    return;
  }
  const checkDraw = newCont.every((gridItem) => gridItem.innerText !== "");
  if (checkDraw) {
    popupContainer.style.visibility = "visible";
    popupContainer.style.opacity = 1;
    popupDraw.innerText = "Draw!";
  }

  document.querySelector(".btn-o").disabled = true;
  document.querySelector(".btn-x").disabled = true;
});
