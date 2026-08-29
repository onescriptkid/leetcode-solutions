/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  let rows = matrix.length
  let cols = matrix[0].length
  let memo = new Array(rows).fill(undefined).map(v => new Array(cols).fill(undefined))   

  let dirs = [[1,0],[-1,0],[0,1],[0,-1]]

  function dfs(r,c) {
    if(memo[r][c] !== undefined) return memo[r][c]


    let max = 1
    for(let [dx,dy] of dirs) {
      let rn = r + dx
      let cn = c + dy

      if(rn < 0 || rn >= rows || cn < 0 || cn >= cols) continue
      if(matrix[rn][cn] <= matrix[r][c]) continue
      let opt = 1+dfs(rn, cn)
      max = Math.max(max, opt)
    }

    return memo[r][c] = max
  }

  let max = 0
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      max = Math.max(max, dfs(r,c))
    }
  }

  return max
};