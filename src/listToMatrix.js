function listToMatrix(list, matrixDimension) {
    let matrix = [];

    for (let i = 0; i< list.length; i++) {
        if (i % matrixDimension === 0) {
            matrix[i/matrixDimension] = [];
        }

        matrix[Math.floor(i/matrixDimension)].push(
          {e: list[i],  i: i%4, j: Math.floor(i / 4), value: getIntValue(list[i])}
        );
    }
    return matrix;
}

function getIntValue(e) {
  return e.innerHTML === "" ? 0 : parseInt(e.innerHTML)
}


module.exports= listToMatrix;
