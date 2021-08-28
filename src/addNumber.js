function addNumber() {
  let zeros = document.querySelectorAll('[data-value="0"]');
  let randomZero = [];
  if (zeros.length > 0) {
    randomZero = zeros[Math.floor(Math.random() * zeros.length)];
  }
  if (Math.random() > 0.1) {
    randomZero.className = "gridElement gridElement-2";
    randomZero.innerHTML = "2";
    randomZero.setAttribute("data-value", 2);
  } else {
    randomZero.className = "gridElement gridElement-4";
    randomZero.innerHTML = "4";
    randomZero.setAttribute("data-value", 4);
  }
}
// function addNumber() {
//   let zeros = document.querySelectorAll('[data-value="0"]');
//   let randomZero = [];
//   if (zeros.length > 0) {
//     randomZero = zeros[Math.floor(Math.random() * zeros.length)];
//   }
//   if (Math.random() > 0.1) {
//     randomZero.className = "gridElement gridElement-2";
//     randomZero.innerHTML = "2";
//     randomZero.setAttribute("data-value", 2);
//   } else {
//     randomZero.className = "gridElement gridElement-4";
//     randomZero.innerHTML = "4";
//     randomZero.setAttribute("data-value", 4);
//   }
//   let pos = calcAnimation(randomZero);
//   randomZero.style.width = "87px";
//   randomZero.style.height = "87px";
//   randomZero.style.top = `${pos.topPos}px`;
//   randomZero.style.left = `${pos.leftPos}px`;
//   setTimeout(function () {
//     randomZero.style.width = "107px";
//     randomZero.style.height = "107px";
//     randomZero.style.top = `${pos.topPos - 10}px`;
//     randomZero.style.left = `${pos.leftPos - 10}px`;
//   }, 0.1);
// }
// function calcAnimation(e) {
//   const topPos = e.offsetTop + 10;
//   const leftPos = e.offsetTop + 10;
//   return { topPos, leftPos };
// }

module.exports = addNumber;
