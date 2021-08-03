import "./StyleSheet.css";

const { reverseGrid, rotate } = require("./rotate.js");
const addNumber = require("./addNumber.js");
const listToMatrix = require("./listToMatrix.js");
const getAnimationsForRow = require("./getAnimationsForRow.js");
let mainGrid = [];
const scoreDisplay = document.getElementById("score");
const bestScore = document.getElementById("best");
let score = 0;
var highScore = localStorage.getItem('highScore') || 0;
bestScore.innerHTML = highScore
const ELEMENT_SIZE = 107;
const MARGIN = 15;
const TRANSITION_DURATION = 0.3;
const AFTER_TRANSITION_DURATION = 1 + TRANSITION_DURATION * 1000;

function gridTemplate(logicalGrid) {
  let mainContainer = document.getElementById("mainContainer");
  logicalGrid.forEach((row, i) => {
    row.forEach((e, j) => {
      mainContainer.insertAdjacentHTML(
        "beforeend",
        gridElementTemplate(i, j, e)
      );
    });
  });
}
function gridElementStyle(i, j) {
  const [et, el] = calcStyleCoords(i, j);
  return `style="top: ${et}px; left: ${el}px"`;
}

function calcStyleCoords(i, j) {
  let mainContainer = document.getElementById("mainContainer");
  const t = mainContainer.offsetTop + MARGIN;
  const l = mainContainer.offsetLeft + MARGIN;
  const et = (ELEMENT_SIZE + MARGIN) * i + t;
  const el = (ELEMENT_SIZE + MARGIN) * j + l;
  return [et, el];
}

function gridElementTemplate(i, j, num) {
  return `<div class="gridElement ${getClass(num)}" ${gridElementStyle(
    i,
    j
  )} data-i="${i}" data-j="${j}">${num === 0 ? "" : num}</div>`;
}
function getClass(num) {
  switch (num) {
    case 0:
      return "gridElement-0";
    case 2:
      return "gridElement-2";
    case 4:
      return "gridElement-4";
    case 8:
      return "gridElement-8";
    case 16:
      return "gridElement-16";
    case 32:
      return "gridElement-32";
    case 64:
      return "gridElement-64";
    case 128:
      return "gridElement-128";
    case 256:
      return "gridElement-256";
    case 512:
      return "gridElement-512";
    case 1024:
      return "gridElement-1024";
    case 2048:
      return "gridElement-2048";
    default:
      return "gridElement-higher";
  }
}

function rand03() {
  return Math.floor(Math.random() * 4);
}
function initGrid() {
  let grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  grid[rand03()][rand03()] = 2;
  let sum = 0;
  do {
    grid[rand03()][rand03()] = Math.random() > 0.1 ? 2 : 4;
    grid.forEach((row) => {
      row.forEach((e) => {
        if (e !== 0) {
          sum++;
        }
      });
    });
  } while (sum === 1);
  return grid;
}
function clearGrid() {
  let mainContainer = document.getElementById("mainContainer")
  mainContainer.innerHTML = "";
  mainContainer.innerHTML += '<div class="tRow"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div><div class="tRow"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div><div class="tRow"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div><div class="tRow"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div>';
}
mainGrid = initGrid();
gridTemplate(mainGrid);
let newButton = document.getElementById("newGameButton");
newButton.addEventListener("click", (event) => {
  clearGrid();
  score = 0;
  scoreDisplay.innerHTML = 0;
  mainGrid = initGrid();
  gridTemplate(mainGrid);
});
document.addEventListener("keydown", play)

function play(event) {
  if (
    !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
  ) {
    return;
  }
  event.preventDefault();
  let grid = extractDataGrid(event.key);
  let animations = getAnimations(grid, event.key);
  animations.forEach((a) => execAnimations(a));
  if (score > highScore) {
    highScore = score;
    bestScore.innerHTML = highScore;
    localStorage.setItem('highScore', highScore);
  }
  setTimeout(updateElement, AFTER_TRANSITION_DURATION);
  if (animations.length > 0) {
    setTimeout(addNumber, AFTER_TRANSITION_DURATION);
  }
  checkWin();
  checkGameOver();
}

function extractDataGrid(arrow) {
  let list = document.getElementsByClassName("gridElement");

  let grid = listToMatrix(list, 4);

  switch (arrow) {
    case "ArrowRight":
      grid = reverseGrid(grid);
      break;
    case "ArrowLeft":
      break;
    case "ArrowDown":
      grid = rotate(grid, "r");
      break;
    case "ArrowUp":
      grid = rotate(grid, "l");
      break;
  }
  return grid;
}

function getAnimations(grid, vector) {
  let animations = [];
  grid.forEach((row) => {
    getAnimationsForRow(row, animations, vector);
  });
  return animations;
}

function execAnimations(a) {
  if (a.distance === 0) {
    return;
  }
  let vx, vy;
  switch (a.direction) {
    case "ArrowLeft":
      vx = -a.distance;
      vy = 0;
      break;
    case "ArrowRight":
      vx = a.distance;
      vy = 0;
      break;
    case "ArrowUp":
      vx = 0;
      vy = -a.distance;
      break;
    case "ArrowDown":
      vx = 0;
      vy = a.distance;
      break;
    default:
      alert("nothing to do ");
  }
  let elem = a.e.e;
  let style = elem.style;
  style.transitionDuration = `${TRANSITION_DURATION}s`;
  style.transform = `translate(${vx * (ELEMENT_SIZE + MARGIN)}px,${
    vy * (ELEMENT_SIZE + MARGIN)
  }px)`;
  let oldI = a.e.i;
  let oldJ = a.e.j;
  let newI = oldI + vy;
  let newJ = oldJ + vx;
  let swap = document.querySelector(`[data-i='${newI}'][data-j='${newJ}']`);
  elem.setAttribute("data-i", newI);
  elem.setAttribute("data-j", newJ);
  swap.setAttribute("data-i", oldI);
  swap.setAttribute("data-j", oldJ);
  if (elem.innerHTML === swap.innerHTML) {
    let val = parseInt(elem.innerHTML) * 2;
    elem.innerHTML = `${val}`;
    elem.className = `gridElement gridElement-${val}`;
    swap.innerHTML = "";
    swap.className = "gridElement gridElement-0";
    score += val;
    scoreDisplay.innerHTML = score;
  }
}

function updateElement() {
  let grid = extractDataGrid();
  grid.forEach((row) => {
    row.forEach((e) => {
      const [newT, newL] = calcStyleCoords(e.i, e.j);
      let style = e.e.style;
      style.transitionDuration = "0s";
      style.transform = "";
      style.top = `${newT}px`;
      style.left = `${newL}px`;
    });
  });
}

function checkWin() {
  let grid = extractDataGrid();
  grid.forEach((row) => {
    row.forEach((e) => {
      if (e.value === 2048) {
        document.removeEventListener("keydown", play);
        console.log("you win")
      }
    });
  });
}

function checkGameOver() {
  let grid = extractDataGrid();
  let checkForAnimations = [];
  checkForAnimations.push(
    getAnimations(grid, "ArrowLeft"),
    getAnimations(grid, "ArrowRight"),
    getAnimations(grid, "ArrowUp"),
    getAnimations(grid, "Arrowdown")
  );
  if (checkForAnimations.length === 0) {
    document.removeEventListener("keydown", play);
    console.log("game over")
  }
}
