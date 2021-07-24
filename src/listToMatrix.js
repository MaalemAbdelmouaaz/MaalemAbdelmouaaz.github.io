function listToMatrix(list, matrixDimension) {
    let matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    for (let i = 0; i< list.length; i++) {
      const e = list[i]
      const eI = parseInt(e.getAttribute("data-i"))
      const eJ = parseInt(e.getAttribute("data-j"))
      matrix[eI][eJ] = {e: list[i],  i: eI, j: eJ, value: getIntValue(list[i])};
    }
    return matrix;
}

function getIntValue(e) {
  return e.innerHTML === "" ? 0 : parseInt(e.innerHTML)
}


module.exports= listToMatrix;
