import './StyleSheet.css';

const { reverseGrid, rotate } = require("./rotate.js");
const gridSlide = require("./gridSlide.js");
const compare = require("./compare.js");
const addNumber = require("./addNumber.js");
const listToMatrix = require("./listToMatrix.js")
let mainGrid = [];

const ELEMENT_SIZE = 107;
const MARGIN = 15;

function gridTemplate(logicalGrid) {
    let mainContainer = document.getElementById("mainContainer")
    logicalGrid.forEach((row, i) => {
        row.forEach((e, j) => {
            mainContainer.insertAdjacentHTML('beforeend', gridElementTemplate(i, j, e));
        })
    })
}
function gridElementStyle(i, j) {
    const [et, el] = calcStyleCoords(i, j)
    return `style="top: ${et}px; left: ${el}px"`
}

function calcStyleCoords(i,j) {
  let mainContainer = document.getElementById("mainContainer")
  const t = mainContainer.offsetTop + MARGIN
  const l = mainContainer.offsetLeft + MARGIN
  const et = (ELEMENT_SIZE + MARGIN) * i + t
  const el = (ELEMENT_SIZE + MARGIN) * j + l
  return [et,el]
}


function gridElementTemplate(i, j, num) {
    return `<div class="gridElement ${getClass(num)}" ${gridElementStyle(i, j)}>${num === 0 ? "" : num}</div>`
}
function getClass(num) {
    switch (num) {
        case 0:
            return "gridElement-0";
        case 2: return "gridElement-2";
        case 4: return "gridElement-4";
        case 8: return "gridElement-8";
        case 16: return "gridElement-16";
        case 32: return "gridElement-32";
        case 64: return "gridElement-64";
        case 128: return "gridElement-128";
        case 256: return "gridElement-256";
        case 512: return "gridElement-512";
        case 1024: return "gridElement-1024";
        case 2048: return "gridElement-2048";
        default: return "gridElement-higher";
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
    grid[rand03()][rand03()] = Math.random() > 0.1 ? 2 : 4;
    return grid;
}
function clearGrid() {
    document.getElementById("mainContainer").innerHTML = "";
}
mainGrid = initGrid()
gridTemplate(mainGrid);
let newButton = document.getElementById("newGameButton")
newButton.addEventListener('click', event => {
    clearGrid();
    mainGrid = initGrid()
    gridTemplate(mainGrid);
});
window.addEventListener("keydown", function (e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


document.addEventListener('keydown', function (event) {
    let grid = extractDataGrid(event.key)
    let animations = getAnimations(grid, event.key)
    animations.forEach(a => execAnimations(a))
    //setTimeout(clearAnimationStyle, 301)
    // var oldGrid = mainGrid.map(function (arr) {
    //     return arr.slice();
    // });
    // switch (event.key) {
    //     case "ArrowLeft":
    //         mainGrid = reverseGrid(gridSlide(reverseGrid(mainGrid)));
    //         break;
    //     case "ArrowRight":
    //         mainGrid = gridSlide(mainGrid);
    //         break;
    //     case "ArrowUp":
    //         mainGrid = rotate(gridSlide(rotate(mainGrid, 'r')), 'l');
    //         break;
    //     case "ArrowDown":
    //         mainGrid = rotate(gridSlide(rotate(mainGrid, 'l')), 'r');
    //         break;
    // }
    // let changed = compare(oldGrid, mainGrid);
    // if (changed) {
    //     addNumber(mainGrid);
    // }
    // clearGrid();
    // gridTemplate(mainGrid);

});



function extractDataGrid(arrow) {
    let list = document.getElementsByClassName("gridElement")

    let grid = listToMatrix(list, 4)

    switch (arrow) {
        case "ArrowRight":
            grid = reverseGrid(grid);
            break;
        case "ArrowLeft":
            break;
        case "ArrowDown":
            grid = rotate(grid, 'r');
            break;
        case "ArrowUp":
            grid = rotate(grid, 'l');
            break;
    }
    return grid
}

function getAnimations(grid, vector) {
    let animations = [];
    grid.forEach(row => {
        getAnimationsForRow(row, animations, vector);
    })
    return animations;
}

function getAnimationsForRow(row, animations, vector) {
    let zerosCount = 0;
    row.forEach(e => {
        if (e.value === 0) {
            zerosCount++;
        } else {
            animations.push({e, distance: zerosCount, direction: vector});
        }
    })
}

function execAnimations(a) {
    let distanceInPixels = a.distance * (ELEMENT_SIZE + MARGIN)
    let vx, vy;
    switch (a.direction) {
        case 'ArrowLeft':
            vx = -distanceInPixels;
            vy = 0;
            break;
        case 'ArrowRight':
            vx = distanceInPixels;
            vy = 0;
            break;
        case 'ArrowUp':
            vx = 0;
            vy = -distanceInPixels;
            break;
        case 'ArrowDown':
            vx = 0;
            vy = distanceInPixels;
            break;
    }
    let style = a.e.e.style
    style.transitionDuration = "0.3s"
    style.transform = `translate(${vx}px,${vy}px)`
}
function clearAnimationStyle() {
  let grid = extractDataGrid()
  grid.forEach(row => {
    row.forEach(e => {
      const [newT, newL] = calcStyleCoords(e.i, e.j)
      let style = e.e.style
      style.top = `${newT}px`
      style.left = `${newL}px`
      style.transform = ""
    })
  })

}
