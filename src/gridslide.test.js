const { expect } = require("@jest/globals");

const gridSlide = require("./gridSlide.js");

test("number 1", () => {
    let arr = [
        [2, 0, 0, 2],
        [0, 2, 4, 0],
        [4, 4, 4, 0],
        [0, 0, 0, 0],
    ];
    result = gridSlide(arr);
    expect(result).toEqual([
        [0, 0, 0, 4],
        [0, 0, 2, 4],
        [0, 0, 4, 8],
        [0, 0, 0, 0],
    ]);
});
test("number 2", () => {
    let arr = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    result = gridSlide(arr);
    expect(result).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]);
});
test("number 3", () => {
    let arr = [
        [2, 4, 8, 2],
        [4, 2, 4, 8],
        [2, 8, 2, 8],
        [8, 4, 2, 8],
    ];
    result = gridSlide(arr);
    expect(result).toEqual([
        [2, 4, 8, 2],
        [4, 2, 4, 8],
        [2, 8, 2, 8],
        [8, 4, 2, 8],
    ]);
});

