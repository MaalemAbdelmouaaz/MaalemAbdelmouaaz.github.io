const { expect } = require("@jest/globals");

const listToMatrix = require("./listToMatrix.js");

test("1", () => {
    let list = [1,1,1,1,1,1,1,1];
    let elementsPerSubArray = 4;
    result = listToMatrix(list, elementsPerSubArray);
    expect(result).toEqual([[1,1,1,1], [1,1,1,1]]);
});
