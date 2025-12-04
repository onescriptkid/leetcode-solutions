/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let memo = new Array(amount + 1).fill(0).map(v => new Array(coins.length + 1).fill(undefined))   

  function dfs(sum, i) {
    if(sum > amount) return 0
    if(sum === amount) return 1
    if(i >= coins.length) return 0
    if(memo[sum][i] !== undefined) return memo[sum][i]

    let opt1 = dfs(sum, i+1) 
    let opt2 = dfs(sum + coins[i], i)

    return memo[sum][i] = opt1 + opt2
  }
  return dfs(0, 0)
};