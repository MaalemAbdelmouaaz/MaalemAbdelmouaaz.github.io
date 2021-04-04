const { expect } = require("@jest/globals");

const combine = require("./combine.js");

test("it should return an empty array", () => {
    let row = [];
    result = combine(row);
    expect(result).toEqual([]);
});
test("it should not change the array", () => {
    let row = [4, 4, 4, 4];
    result = combine(row);
    expect(result).toEqual([8, 8]);
});
test("it should return an empty array", () => {
    let row = [2, 2, 4];
    result = combine(row);
    expect(result).toEqual([4, 4]);
});
test("it should remove the zeros then add them to the left", () => {
    let row = [2, 2];
    result = combine(row);
    expect(result).toEqual([4]);
});