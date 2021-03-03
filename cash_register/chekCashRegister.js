var currency = {
  "ONE HUNDRED": 100.0,
  "TWENTY": 20.0,
  "TEN": 10.0,
  "FIVE": 5.0,
  "ONE": 1.0,
  "QUARTER": 0.25,
  "DIME": 0.1,
  "NICKEL": 0.05,
  "PENNY": 0.01
};

function checkCashRegister(price, cash, cid) {
  let output = {status: null, change: []};
  price = price || 0
  cash = cash || 0
  cid = cid || []

  if (cid.length === 0) {
    output.status = "CLOSED"
  }

  let changeGoal = cash - price;
  if (changeGoal === 0) {
    output.change = []
    output.status = output.status || "OPEN"
    return output
  }
  let drawer = cid.reduce
  (function (acc, cur) {
    acc.total = addFloat(acc.total, cur[1]);
    if(cur[1]>0) {
      acc.coins[cur[0]] = cur[1];
    }
    return acc;
  }, {total: 0, coins: {}});
  const initialDrawerTotal = drawer.total;
  if (drawer.total === changeGoal) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  if (drawer.total < changeGoal) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  var change = {total: 0, coins: {}};
  let resultChange = findChange(drawer, changeGoal, change)
  if (!resultChange) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  let formattedResultChange = formatChangeResult(resultChange)
  if (initialDrawerTotal === change.total) {
    return {status: "CLOSED", change: formattedResultChange};
  }
  return {status: "OPEN", change: formattedResultChange};
}

function findChange(drawer, changeGoal, change) {
  if(change.total === changeGoal) {
    return change
  }
  
  if(Object.keys(drawer.coins).length === 0) {
    return false
  }
  let maxKey = drawerBiggestAvailableCurrencyName(drawer)
  if (change.total + currency[maxKey] <= changeGoal) {
    transferFromDrawerToChange(maxKey, drawer, change)
  } else {
    removeFromDrawer(maxKey, drawer)
  }
  return findChange(drawer, changeGoal, change)
}

function removeFromDrawer(key, drawer) {
  drawer.total = subFloat(drawer.total, drawer.coins[key])
  delete drawer.coins[key]
}

function transferFromDrawerToChange(key, drawer, change) {
  let v = currency[key]
  drawer.coins[key] = subFloat(drawer.coins[key], v)
  if (drawer.coins[key] === 0) {
    delete drawer.coins[key]
  }
  drawer.total = subFloat(drawer.total, v)
  change.total = addFloat(change.total, v)
  if (!change.coins.hasOwnProperty(key)) {
    change.coins[key] = 0
  }
  change.coins[key] = addFloat(change.coins[key], v)
}

// pull biggest coin/bill available in drawer
function drawerBiggestAvailableCurrencyName(drawer) {
  let maxKey = "PENNY"
  Object.keys(drawer.coins).forEach(k => {
    if (currency[k] > currency[maxKey]) {
      maxKey = k;
    }
  })
  return maxKey
}

function formatChangeResult(change) {
  return Object.entries(change.coins)
}

function addFloat(a,b) {
  return parseFloat((a+b).toFixed(2))
}

function subFloat(a,b) {
  return addFloat(a, -1*b)
}



module.exports = checkCashRegister