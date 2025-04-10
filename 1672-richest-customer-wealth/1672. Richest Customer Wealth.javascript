/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

  let max = undefined
  for(let i =0; i < accounts.length; i++) {
    let wealth = 0
    for(let j = 0; j < accounts[i].length; j++) {
      wealth+=accounts[i][j]
    }
    if(max === undefined) {
      max = wealth
    } else if(wealth > max) {
      max = wealth
    }
  }
  return max
};