const { expect } = require("@jest/globals");

const listToMatrix = require("./listToMatrix.js");

test("1", () => {
    let list = [1,1,1,1,1,1,1,1];
    result = listToMatrix(list);
    expect(result).toEqual([[1,1,1,1], [1,1,1,1]]);
});


test("2", () => {
  let list = [2,4,1,0,0,8,1,1,9];
  result = listToMatrix(list);
  expect(result).toEqual([[2,4,1], [0,0,8], [1,1,9]]);
});
