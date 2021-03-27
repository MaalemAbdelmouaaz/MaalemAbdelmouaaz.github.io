const { expect } = require("@jest/globals");

const removeZeros  = require("./removeZeros.js");

test("it should return an empty array", () => {
    let arr = [];
    result = removeZeros(arr);
    expect(result).toEqual([]);
});
test("it should not change the array", () => {
    let arr = [4, 4, 4, 4];
    result = removeZeros(arr);
    expect(result).toEqual([4, 4, 4, 4]);
});
test("it should return an empty array", () => {
    let arr = [0, 0, 0, 0];
    result = removeZeros(arr);
    expect(result).toEqual([]);
});
test("it should remove the zeros", () => {
    let arr = [2, 0, 2, 0];
    result = removeZeros(arr);
    expect(result).toEqual([2,2]);
});