function removeZeros(arr) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
module.exports = removeZeros;