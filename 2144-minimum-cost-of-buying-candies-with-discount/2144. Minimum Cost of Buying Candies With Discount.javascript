/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {

  // 6 5 7 9 2 2    

  // 9 7 6 5 2 2
  // 9 7 0 5 2 0   16 + 7 = 23

  cost.sort((a,b) => a < b ? 1 : -1)
  let total = 0
  for(let i = 0; i < cost.length; i++) {
    let c = cost[i]
    if(i % 3 !== 2) {
      total+=c
    }
  }
  return total
};