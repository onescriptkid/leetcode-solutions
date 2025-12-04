/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let memo = new Array(prices.length + 1).fill(0).map(
    v => new Array(2).fill(0).map(
      v => new Array(3).fill(undefined)
    )
  )   
  // console.log(memo)
  // let memo = {}

  function dfs(i, buying, count) {
    // let key = `${i},${buying},${count}`
    if(i >= prices.length) return 0
    if(count >= 2) return 0
    if(memo[i][buying][count] !== undefined) return memo[i][buying][count]
    // if(memo[key] !== undefined) return memo[key]

    let opt1 = dfs(i+1, buying, count)

    let opt2 = 0
    if(buying) {
      opt2 = -prices[i] + dfs(i+1, 0, count)
    } else {
      opt2 = prices[i] + dfs(i+1, 1, count+1)
    }

    return memo[i][buying][count] = Math.max(opt1, opt2)
  }
  return dfs(0, 1, 0)
};