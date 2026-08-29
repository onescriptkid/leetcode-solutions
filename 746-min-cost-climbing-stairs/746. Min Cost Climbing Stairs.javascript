/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let memo = new Array(cost.length + 1).fill(undefined)

  function dfs(i) {
    if(i >= cost.length) return 0
    if(memo[i]!== undefined) return memo[i]

    let opt1 = cost[i] + dfs(i+1)
    let opt2 = cost[i] + dfs(i+2)

    return memo[i] = Math.min(opt1, opt2)
  } 
  return Math.min(dfs(0), dfs(1))
};