const slide = require("./slide.js");

function gridSlide(arr) {
    for (let i=0; i<4; i++) {
        slide(arr[i]);
    }
    return arr;
}
module.exports = gridSlide;
