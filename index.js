
function gridTemplate(logicalGrid) {
    let mainContainer = document.getElementById("mainContainer")
    logicalGrid.forEach(row => {
        mainContainer.insertAdjacentHTML( 'beforeend', gridRowTemplate(row) );
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
        default: return "";
    }
}

gridTemplate(
    [
        [4,0,0,0],
        [4,5,0,0],
        [4,0,6,9],
        [4,5,0,9],
    ]
)