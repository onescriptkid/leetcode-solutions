/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let memo = {}

  function dfs(x,y) {
    let key = `${x},${y}`
    // console.log(x, y, memo)
    if(x === m && n === y) {
      return 1
    }
    if(x > m || y > n) {
      return 0
    }
    if(memo[key] !== undefined) {
      return memo[key] 
    }

    let right = dfs(x+1, y)
    let down = dfs(x, y+1)
    // if(right === -1 && down === -1) {
    //   memo[key] = -1
    //   return memo[key]
    // }
    // if(right === -1 && down !== -1) {
    //   memo[key] = 1 + down
    //   return memo[key]
    // }
    // if(right !== -1 && down === -1) {
    //   memo[key] = 1 + right
    //   return memo[key]
    // }
    memo[key] = right + down
    return memo[key]
  }
  return dfs(1, 1)

};