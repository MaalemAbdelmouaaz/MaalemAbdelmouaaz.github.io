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
module.exports = addNumber;
