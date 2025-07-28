/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {

  let rows = matrix.length
  let cols = matrix[0].length

  let lis = new Array(rows).fill(0).map(v => new Array(cols).fill(undefined))

  // console.log(lis)

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      dfs(r,c, -1)
    }
  }
  // 1 1 2
  // 2 2 1
  // 3 e

  // console.log('rows cols', rows, cols)
  function dfs(r,c, prev) {
    if(r <0 || r >= rows || c < 0 || c >= cols) return 0
    if(matrix[r][c] <= prev) return 0
    if(lis[r][c] !== undefined) return lis[r][c]

    let opts = []
    let curr = matrix[r][c]

    let opt1 = dfs(r,c+1, curr)
    let opt2 = dfs(r,c-1,curr)
    let opt3 = dfs(r+1,c, curr)
    let opt4 = dfs(r-1,c, curr)
    opts.push(1+opt1)
    opts.push(1+opt2)
    opts.push(1+opt3)
    opts.push(1+opt4)

    lis[r][c] = Math.max(1, ...opts)
    return lis[r][c]
  }
  // console.log(lis)

  let max
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(max === undefined || max < lis[r][c]) {
        max = lis[r][c]
      }
    }
  }
  return max
};