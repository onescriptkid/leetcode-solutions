/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  // 5     [1,2,5]
  // 1,1,1,1,1
  // 1,1,1,2
  // 1,2,2
  // 5

  let memo = new Array(coins.length + 1).fill(0).map(v => new Array(amount+1).fill(undefined))

  function dfs(i, sum) {
    if(memo[i][sum] !== undefined) {
      return memo[i][sum]
    }
    if(sum === amount) {
      return 1
    }
    if(sum > amount) {
      return 0
    }
    if(i >= coins.length) {
      return 0
    }

    let opt1 = dfs(i, sum+coins[i])
    let opt2 = dfs(i+1, sum)
    // console.log('i', i, 'sum', sum, 'opt1', opt1, 'opt2', opt2)
    memo[i][sum] = opt1 + opt2
    return memo[i][sum]
  }
  return dfs(0, 0)
    
};