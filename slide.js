const combine = require("./combine.js");
function slide(row) {
    var i = row.length;
    while (i--) {
        if (row[i] === 0) {
            row.splice(i, 1);
        }
    }
    combine(row);
    while (row.length < 4) {
        row.unshift(0);
    }
    return row;
}
module.exports = slide;