// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
  let change = cash - price
  let registerTotal = 0
  let changeFromRegister = []
  cid.map(money => registerTotal += money[1])
  // console.log(change)
  //probably fix the calculations on the top it looks like the rounding is the culprit cause the cases im missing are due to a missing penny
  registerTotal = registerTotal.toFixed(2)// possible suspect as the rounding could cause to losing a penny
  // console.log(registerTotal-change)
  console.log(change)
  if (registerTotal < change){
    return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (registerTotal === change){
      return {status: "CLOSED", change: cid}
      } else{
        let currencyUnit = {
          'ONE HUNDRED': 100, 
          'TWENTY': 20,
          'TEN': 10,
          'FIVE': 5,
          'ONE': 1,
          'QUARTER': .25,
          'DIME': .10,
          'NICKEL':.05,
          'PENNY': .01,
        };
        cid = cid.reverse()

        cid.map( element => {
            let counter = 0;
            //maybe instead of map use a loop or even a case statement for each bracket
            //possibly even use reduce to since we are adding up numbers as the value seem to be correct
          while (change >= currencyUnit[element[0]] & element[1] >= currencyUnit[element[0]]){
            //probably try a switch case can help make things clearer
            // console.log(element[1],currencyUnit[element[0]])
            //maybe don't round and write a case where if there is something less than .01 but greater than 0 just add a penny
            change -= currencyUnit[element[0]];
            element[1] -= currencyUnit[element[0]];
            counter += currencyUnit[element[0]]
            // console.log(change)
          }
            // console.log(counter)
            //the below should be okay, but maybe not a counter? at least try to fix the name to something more appropriate
          if (counter != 0) changeFromRegister.push([element[0],counter])
        })
        console.log(changeFromRegister)
    }
    return {status: "OPEN", change: changeFromRegister}
  }
(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//19.50 is how much it cost
//it is paid with a 20
//the rest is how much cash is in the drawer
//cashInDRawer < change = insufficient funds, change: []
//cashInDrawer === change = closed, cid array
//cashInDraw > change = open, return change with highest to lowest

//Step 1: find the change needed
//step 2: find out how much cash is in the register
//step 3: find a way to be able to rearrange cid by highest value dollar

  //so for this maybe I should loop through the currenUnit array. afterwards I should compare if change amount is equal to or higher. 
  // if it is, then i need to do a while loop to subtract the value to the change and cid until cid is 0/ have a remainder or change =0/have a remainder. while that happens i should also add that value to a currencyCounter
  //then i need to to do change.push[currency value, value value]