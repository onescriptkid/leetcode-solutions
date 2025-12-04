/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let tc = 0
  let tg = 0
  for(let i = 0;i < gas.length; i++) {
    tc+=cost[i]
    tg+=gas[i]
  }
  if(tc > tg) {
    return -1
  }

  let index = 0
  let total = 0
  for(let i = 0; i < gas.length; i++) {
    total+=gas[i]-cost[i]

    if(total < 0) {
      index = i+1 
      total = 0
    }
  }
  return index

};