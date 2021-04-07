function addNumber(arr) {
    let zeros = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (arr[i][j] === 0) {
                zeros.push({
                    x: i,
                    y: j
                });
            }
        }
    }
    if (zeros.length > 0) {
        let randomElement = zeros[Math.floor(Math.random() * zeros.length)];
        arr[randomElement.x][randomElement.y] = Math.random() < 0.9 ? 2 : 4;
    }
    return arr;
}
module.exports = addNumber;