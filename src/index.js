import { concat } from "lodash";
import "./StyleSheet.css";

const { reverseGrid, rotate } = require("./rotate.js");
const addNumber = require("./addNumber.js");
const listToMatrix = require("./listToMatrix.js");
const getAnimationsForRow = require("./getAnimationsForRow.js");
let mainGrid = [];
const scoreDisplay = document.getElementById("score");
const bestScore = document.getElementById("best");
let score = 0;
let gameOverCondition = true;
let winCondition = true;
var highScore = localStorage.getItem("highScore") || 0;
bestScore.innerHTML = highScore;
const ELEMENT_SIZE = 107;
const MARGIN = 15;
// const TRANSITION_DURATION = 0.09;
// const AFTER_TRANSITION_DURATION = 1 + TRANSITION_DURATION * 1000;

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
  )} data-i="${i}" data-j="${j}" data-value="${num}">${
    num === 0 ? "" : num
  }</div>`;
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
  let mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";
  mainContainer.innerHTML +=
    '<div class="tRow"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div><div class="tRow"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div><div class="tRow"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div><div class="tRow"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div>';
}
mainGrid = initGrid();
gridTemplate(mainGrid);
let newButton = document.getElementById("newGameButton");
newButton.addEventListener("click", (event) => {
  clearGrid();
  score = 0;
  winCondition = true;
  gameOverCondition = true;
  scoreDisplay.innerHTML = 0;
  mainGrid = initGrid();
  gridTemplate(mainGrid);
  document.addEventListener("keydown", eventsHandler);
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
});

const myWorker = new Worker("worker.js");
document.addEventListener("keydown", eventsHandler);
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff < 0) {
      evt.key = "ArrowRight";
    } else {
      evt.key = "ArrowLeft";
    }
  } else {
    if (yDiff < 0) {
      evt.key = "ArrowDown";
    } else {
      evt.key = "ArrowUp";
    }
  }
  eventsHandler(evt);
  xDown = null;
  yDown = null;
}
function eventsHandler(event) {
  if (
    !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
  ) {
    return;
  }
  event.preventDefault();
  myWorker.postMessage(event.key);
}
myWorker.onmessage = (event) => {
  let key = event.data.key;
  let time = event.data.time;
  play(key, time);
};

// document.addEventListener("keydown", play);

function play(event, time) {
  myWorker.postMessage(true);
  let popList = document.getElementsByClassName("pop");
  Array.from(popList).forEach((e) => {
    e.className = `gridElement gridElement-${e.getAttribute("data-value")}`;
  });
  let add = false;
  let grid = extractDataGrid(event);
  let animations = getAnimations(grid, event);
  animations.forEach((a) => execAnimations(a, time));
  if (score > highScore) {
    highScore = score;
    bestScore.innerHTML = highScore;
    localStorage.setItem("highScore", highScore);
  }
  if (animations.length > 0) {
    add = true;
  }
  setTimeout(function () {
    updateElement(add);
    myWorker.postMessage(false);
    checkWin();
    checkGameOver();
  }, 1 + time * 1000);
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

function execAnimations(a, time) {
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
  style.transitionDuration = `${time}s`;
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
  let elemValue = parseInt(elem.getAttribute("data-value"));
  let swapValue = parseInt(swap.getAttribute("data-value"));
  if (elemValue === swapValue) {
    elem.className = `${elem.className} merge`;
    elem.setAttribute("data-value", elemValue * 2);
    swap.className = `${swap.className} swap`;
    swap.setAttribute("data-value", 0);
    score += elemValue * 2;
    scoreDisplay.innerHTML = score;
  }
}

function merge() {
  let mergeList = document.getElementsByClassName("merge");
  let swapList = document.getElementsByClassName("swap");
  Array.from(mergeList).forEach((e) => {
    e.innerHTML = e.getAttribute("data-value");
    e.className = `gridElement gridElement-${e.getAttribute("data-value")} pop`;
  });
  Array.from(swapList).forEach((e) => {
    e.innerHTML = "";
    e.className = "gridElement gridElement-0";
  });
}

function updateElement(add) {
  merge();
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
  if (add) {
    addNumber();
  }
}

function checkWin() {
  if (!winCondition) {
    return;
  }
  let grid = extractDataGrid();
  grid.forEach((row) => {
    row.forEach((e) => {
      if (e.value === 2048) {
        document.removeEventListener("keydown", eventsHandler);
        document.removeEventListener("touchstart", handleTouchStart, false);
        document.removeEventListener("touchmove", handleTouchMove, false);
        document.getElementById("mainContainer").innerHTML +=
          '<div id = "win">You win!<div id = "continue">Continue</div></div>';
        winCondition = false;
        let Continue = document.getElementById("continue");
        Continue.addEventListener("click", function (event) {
          document.getElementById("win").remove();
          document.addEventListener("keydown", eventsHandler);
          document.addEventListener("touchstart", handleTouchStart, false);
          document.addEventListener("touchmove", handleTouchMove, false);
        });
      }
    });
  });
}

function checkGameOver() {
  if (!gameOverCondition) {
    return;
  }
  let checkForAnimations = 0;
  let gridLeft = extractDataGrid("ArrowLeft");
  let gridRight = extractDataGrid("ArrowRight");
  let gridUp = extractDataGrid("ArrowUp");
  let gridDown = extractDataGrid("ArrowDown");
  if (getAnimations(gridLeft, "ArrowLeft").length === 0) {
    checkForAnimations++;
  }
  if (getAnimations(gridRight, "ArrowRight").length === 0) {
    checkForAnimations++;
  }
  if (getAnimations(gridUp, "ArrowUp").length === 0) {
    checkForAnimations++;
  }
  if (getAnimations(gridDown, "ArrowDown").length === 0) {
    checkForAnimations++;
  }

  if (checkForAnimations === 4) {
    gameOverCondition = false;
    document.removeEventListener("keydown", eventsHandler);
    document.removeEventListener("touchstart", handleTouchStart, false);
    document.removeEventListener("touchmove", handleTouchMove, false);
    document.getElementById("mainContainer").innerHTML +=
      '<div id = "win">Game Over</div>';
  }
}
