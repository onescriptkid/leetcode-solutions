/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let memo = new Array(amount).fill(undefined).map(v => new Array(coins.length).fill(undefined))   

  function dfs(sum, i) {
    if(sum === amount) return 1
    if(sum > amount) return 0
    if(memo[sum][i] !== undefined) return memo[sum][i]

    let res = 0
    for(let j = i; j < coins.length; j++) {
      res+= dfs(sum+coins[j], j)
    }

    return memo[sum][i] = res
  }
  return dfs(0, 0)
};