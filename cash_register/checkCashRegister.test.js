const checkCashRegister = require("./chekCashRegister.js")

test("zero params should return closed with empty change array", function () {
  let result = checkCashRegister(0, 0, [])
  expect(result).toEqual({status: "CLOSED", change: []})
})

test("null params should behave same as zero params", function () {
  let result = checkCashRegister(null, null, null)
  expect(result).toEqual({status: "CLOSED", change: []})
})

test("cash that equals price should return status OPEN and change []", function () {
  let result = checkCashRegister(4, 4, [["ONE", 3], ["QUARTER", 3.25]])
  expect(result).toEqual({status: "OPEN", change: []})

  result = checkCashRegister(1.5, 1.5, [["ONE", 3], ["QUARTER", 3.25], ["ONE HUNDRED", 500]])
  expect(result).toEqual({status: "OPEN", change: []})

  result = checkCashRegister(0, 0, [["ONE", 3], ["QUARTER", 3.25], ["ONE HUNDRED", 200]])
  expect(result).toEqual({status: "OPEN", change: []})
})

test("when change is due and cid is empty return status INSUFFICIENT_FUNDS and change []", function () {
  let result = checkCashRegister(4, 5, [])
  expect(result).toEqual({status: "INSUFFICIENT_FUNDS", change: []})

  result = checkCashRegister(2, 10, [])
  expect(result).toEqual({status: "INSUFFICIENT_FUNDS", change: []})
})

test("when change is due and cid is empty return status INSUFFICIENT_FUNDS and change []", function () {
  let result = checkCashRegister(4, 5, [])
  expect(result).toEqual({status: "INSUFFICIENT_FUNDS", change: []})

  result = checkCashRegister(2, 10, [])
  expect(result).toEqual({status: "INSUFFICIENT_FUNDS", change: []})
})

test("one dollar price, 5 dollars cash, 4 one dollars cid", function () {
  let result = checkCashRegister(1, 5, [["ONE", 4]])
  expect(result).toEqual({status: "CLOSED", change: [["ONE", 4]]})
})

test("one dollar price, 10 dollars cash, 4 one dollars cid", function () {
  let result = checkCashRegister(1, 10, [["ONE", 4]])
  expect(result).toEqual({status: "INSUFFICIENT_FUNDS", change: []})
})

test("one dollar price, 10 dollars cash, 9 dollars cid", function () {
  let result = checkCashRegister(1, 10, [["ONE", 4], ["FIVE", 5]])
  expect(result).toEqual({status: "CLOSED", change: [["ONE", 4], ["FIVE", 5]]})
})

test("one dollar price, 10 dollars cash, 20 dollars cid", function () {
  let result = checkCashRegister(1, 10, [["ONE", 4], ["FIVE", 15]])
  expect(result).toEqual({status: "OPEN", change: [["FIVE", 5], ["ONE", 4]]})
})

test("freecodecamp test case 3", function() {
  let result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  expect(result).toEqual({status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]})
})

test("freecodecamp test case 4", function() {
  let result = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  expect(result).toEqual({status: "INSUFFICIENT_FUNDS", change: []})
})


