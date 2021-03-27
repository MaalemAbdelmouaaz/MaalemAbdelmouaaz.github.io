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
gridTemplate(initGrid());
let newButton = document.getElementById("newGameButton")
newButton.addEventListener('click', event => {
    clearGrid();
    gridTemplate(initGrid());
});

document.addEventListener('keydown', function(event) {
    const key = event.key;
    switch (event.key) {
        case "ArrowLeft":
            alert("left");
            break;
        case "ArrowRight":
            alert("right");
            break;
        case "ArrowUp":
            alert("up");
            break;
        case "ArrowDown":
            alert("down");
            break;
    } 
});

