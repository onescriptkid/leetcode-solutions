/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let rows = matrix.length
  let cols = matrix[0].length

  let memo = new Array(rows).fill(0).map(v => new Array(cols).fill(undefined))

  function dfs(r, c) {
    if(r >= rows || c >= cols) return 0
    if(matrix[r][c] === '0') return 0
    if(memo[r][c] !== undefined) return memo[r][c]

    let opt1 = dfs(r,c+1)
    let opt2 = dfs(r+1,c)
    let opt3 = dfs(r+1,c+1)

    return memo[r][c] = 1 + Math.min(opt1, opt2, opt3)
  }

  let max = 0
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      max = Math.max(max, dfs(r,c))
    }
  }

  return max**2
};