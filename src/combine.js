function combine(row) {
    if (row.length >0)
    for (let i = row.length-1; i >= 0; i--) {
        let a = row[i];
        let b = row[i - 1];
        if (a == b) {
            row[i] = a + b;
            row.splice(i - 1, 1);
        }
    }
    return row;
}
module.exports = combine;