var currency = [
  {name: "ONE HUNDRED", val: 100.0},
  {name: "TWENTY", val: 20.0},
  {name: "TEN", val: 10.0},
  {name: "FIVE", val: 5.0},
  {name: "ONE", val: 1.0},
  {name: "QUARTER", val: 0.25},
  {name: "DIME", val: 0.1},
  {name: "NICKEL", val: 0.05},
  {name: "PENNY", val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var output = {status: null, change: []};
  var change = cash - price;
  var drawer = cid.reduce
  (function (acc, cur) {
    acc.total += cur[1];
    acc[cur[0]] = cur[1];
    return acc;
  }, {total: 0});

  if (drawer.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  if (drawer.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }


  return change;
}

