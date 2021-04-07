const { expect } = require("@jest/globals");

const compare = require("./compare.js");

test("number 1", () => {
    let a = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2]
    ];
    let b = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 0, 0]
    ];
    result = compare(a, b);
    expect(result).toEqual(true);
});
test("number 2", () => {
    let a = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    let b = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    result = compare(a, b);
    expect(result).toEqual(false);
});
test("number 3", () => {
    let a = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 2, 2, 2],
    ];
    let b = [
        [2, 2, 2, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    result = compare(a, b);
    expect(result).toEqual(true);
});
test("number 4", () => {
    let a = [
        [8, 0, 0, 0],
        [2, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    let b = [
        [0, 0, 0, 8],
        [0, 0, 0, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    result = compare(a, b);
    expect(result).toEqual(true);
});
test("number 5", () => {
    let a = [
        [8, 2, 4, 2],
        [2, 8, 2, 4],
        [4, 2, 8, 2],
        [2, 8, 2, 4],
    ];
    let b = [
        [8, 2, 4, 2],
        [2, 8, 2, 4],
        [4, 2, 8, 2],
        [2, 8, 2, 4],
    ];
    result = compare(a, b);
    expect(result).toEqual(false);
});