/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let memo = {}
  function dfs(i) {
    if(memo[i] !== undefined) {
      return memo[i]
    }
    if(i >= cost.length) {
      return 0
    }

    let opt1 = cost[i] + dfs(i+1)
    let opt2 = cost[i] + dfs(i+2)

    let min = Math.min(opt1, opt2)
    memo[i] = min
    return memo[i]

  } 
  return Math.min(dfs(0), dfs(1))
};