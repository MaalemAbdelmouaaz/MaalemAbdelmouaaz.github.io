const { expect } = require("@jest/globals");

const { rotate } = require("./rotate.js");

test("number 1", () => {
    let arr = [
        [2, 2, 2, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    result = rotate(arr, 'r');
    expect(result).toEqual([
        [0, 0, 0, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
    ]);
});
test("number 2", () => {
    let arr = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    result = rotate(arr, 'r');
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
    result = rotate(arr, 'r');
    expect(result).toEqual([
        [8, 2, 4, 2],
        [4, 8, 2, 4],
        [2, 2, 4, 8],
        [8, 8, 8, 2],
    ]);
});
test("number 4", () => {
    let arr = [
        [2, 2, 2, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    result = rotate(arr, 'l');
    expect(result).toEqual([
        [2, 0, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 0],
    ]);
});

