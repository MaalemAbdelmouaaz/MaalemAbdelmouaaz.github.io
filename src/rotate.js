function reverseGrid(arr) {
    for (let i = 0; i < 4; i++) {
        arr[i].reverse();
    }
    return arr;
}
module.exports = reverseGrid;
function rotate(arr, direction = 'l') {
    const height = arr.length;
    const width = arr[0].length;
    const total = height * width;
    const rotated = [];
  
    let i = direction === 'r' ? 0 : total - 1;
  
    while (true) {
      const y = i / width | 0;
      const x = i % width;
      const newY = direction === 'r' ? x : width - 1 - x;
      const newX = direction === 'r' ? height - 1 - y : y;
      const value = arr[y][x];
  
      if (!rotated[newY]) rotated.push([]);
      rotated[newY][newX] = value;
  
      if (direction === 'r') {
        if (++i >= total) {
          break;
        }
      } else {
        if (i-- <= 0) {
          break;
        }
      }
    }
  
    return rotated;
  }
  module.exports = rotate, reverseGrid;
  