function getAnimationsForRow(row, animations, vector) {
  let zerosCount = 0;
  let last = 0;
  row.forEach((e) => {
    if (e.value === 0) {
      zerosCount++;
    } else {
      if (last === e.value) {
        zerosCount++;
        last = 0;
      } else {
        last = e.value;
      }
      if (zerosCount > 0) {
        animations.push({ e, distance: zerosCount, direction: vector });
      }
    }
  });
}
module.exports = getAnimationsForRow;
