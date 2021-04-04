const { expect } = require("@jest/globals");

const slide = require("./slide.js");

test("it should return an empty array", () => {
    let row = [];
    result = slide(row);
    expect(result).toEqual([]);
});
test("it should not change the array", () => {
    let row = [4, 4, 4, 4];
    result = slide(row);
    expect(result).toEqual([0, 0, 8, 8]);
});
test("it should return an empty array", () => {
    let row = [0, 0, 0, 0];
    result = slide(row);
    expect(result).toEqual([0, 0, 0, 0]);
});
test("it should remove the zeros then add them to the left", () => {
    let row = [2, 0, 2, 0];
    result = slide(row);
    expect(result).toEqual([0, 0, 0, 4]);
});
