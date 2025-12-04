/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  let rows = matrix.length
  let cols = matrix[0].length

  let memo = new Array(rows).fill(0).map(v => new Array(cols).fill(undefined))
  let dirs = [[1,0],[-1,0],[0,1],[0,-1]]

  function dfs(r,c) {
    if(memo[r][c] !== undefined) return memo[r][c]

    let max = 0
    for(let [dx,dy] of dirs) {
      let rn = r + dx
      let cn = c + dy

      if(rn <0 || rn >= rows || cn < 0 || cn >= cols) continue
      if(matrix[r][c] >= matrix[rn][cn]) continue

      let res = dfs(rn, cn)
      max = Math.max(max, res)
    }

    return memo[r][c] = 1 + max
  }

  let max = 0
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      max = Math.max(max, dfs(r, c))
    }
  }
  return max
};