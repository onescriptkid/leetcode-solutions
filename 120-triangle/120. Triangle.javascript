/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let rows = triangle.length
  let cols = triangle[0].length

  let memo = new Array(rows).fill(0).map(v => new Array(cols).fill(undefined))   

  function dfs(r,c) {
    if(r >= rows) return 0
    if(memo[r][c] !== undefined) return memo[r][c]

    let opt1 = dfs(r+1, c)
    let opt2 = dfs(r+1, c+1)

    return memo[r][c] = triangle[r][c] + Math.min(opt1, opt2)
  }
  return dfs(0, 0)
};