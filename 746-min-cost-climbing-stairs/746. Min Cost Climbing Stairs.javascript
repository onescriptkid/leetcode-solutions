/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

  // f(1) = cost
  // f(1) = cost

  let memo = {}

  function dfs(step) {
    if(memo[step] !== undefined) {
      return memo[step]
    }
    if(step >= cost.length) {
      return 0
    }

    let opt1 = cost[step] + dfs(step + 1)
    let opt2 = cost[step] + dfs(step + 2)

    let min = Math.min(opt1, opt2)
    memo[step] = min
    return min
  } 
  let min = Math.min(dfs(0), dfs(1))
  return min

};