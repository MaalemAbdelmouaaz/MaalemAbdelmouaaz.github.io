import './StyleSheet.css';

const { reverseGrid, rotate } = require("./rotate.js");
const gridSlide = require("./gridSlide.js");
const compare = require("./compare.js");
const addNumber = require("./addNumber.js");
let mainGrid = [];
function gridTemplate(logicalGrid) {
    let mainContainer = document.getElementById("mainContainer")
    logicalGrid.forEach(row => {
        mainContainer.insertAdjacentHTML('beforeend', gridRowTemplate(row));
    })
}


function gridRowTemplate(logicalRow) {
    return `<div class="gridRow">
            ${logicalRow.map(e => gridElementTemplate(e)).join("<br>")}        
            </div>`
}

function gridElementTemplate(num) {
    return `<div class="gridElement ${getClass(num)}" >${num === 0 ? "" : num}</div>`
}
function getClass(num) {
    switch (num) {
        case 0:
            return "";
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
    var oldGrid = mainGrid.map(function (arr) {
        return arr.slice();
    });
    switch (event.key) {
        case "ArrowLeft":
            mainGrid = reverseGrid(gridSlide(reverseGrid(mainGrid)));
            break;
        case "ArrowRight":
            mainGrid = gridSlide(mainGrid);
            break;
        case "ArrowUp":
            mainGrid = rotate(gridSlide(rotate(mainGrid, 'r')), 'l');
            break;
        case "ArrowDown":
            mainGrid = rotate(gridSlide(rotate(mainGrid, 'l')), 'r');
            break;
    }
    let changed = compare(oldGrid, mainGrid);
    if (changed) {
        addNumber(mainGrid);
    }
    clearGrid();
    gridTemplate(mainGrid);
});

