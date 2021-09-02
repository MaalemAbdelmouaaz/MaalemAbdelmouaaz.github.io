const { expect } = require("@jest/globals");

const listToMatrix = require("./listToMatrix.js");

test("1", () => {
    let list = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    result = listToMatrix(list);
    expect(result).toEqual([
      [{e:1,  i: 0, j: 0, value: 1}, {e:1,  i: 0, j: 1, value: 1}, {e:1,  i: 0, j: 2, value: 1}, {e:1,  i: 0, j: 3, value: 1}],
      [{e:1,  i: 1, j: 0, value: 1}, {e:1,  i: 1, j: 1, value: 1}, {e:1,  i: 1, j: 2, value: 1}, {e:1,  i: 1, j: 3, value: 1}],
      [{e:1,  i: 2, j: 0, value: 1}, {e:1,  i: 2, j: 1, value: 1}, {e:1,  i: 2, j: 2, value: 1}, {e:1,  i: 2, j: 3, value: 1}],
      [{e:1,  i: 3, j: 0, value: 1}, {e:1,  i: 3, j: 1, value: 1}, {e:1,  i: 3, j: 2, value: 1}, {e:1,  i: 3, j: 3, value: 1}],
    ];);
});



