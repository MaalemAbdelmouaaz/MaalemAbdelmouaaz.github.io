const combine = require("./combine.js");
function slide(row) {
    let temp = row.length;
    let i = temp;
    while (i--) {
        if (row[i] === 0) {
            row.splice(i, 1);
        }
    }
    combine(row);
    while (temp !== row.length) {
        row.unshift(0);
    }
    return row;
}
module.exports = slide;