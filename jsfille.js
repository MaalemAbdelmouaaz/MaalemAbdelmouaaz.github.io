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

gridTemplate(
    [
        [0,2,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,2],
    ]
) 

