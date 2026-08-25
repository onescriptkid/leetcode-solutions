/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

  let n = matrix.length

  for(let r = 0; r < n; r++) {
    for(let c = 0; c < n>> 1; c++) {
      let tmp = matrix[r][c]
      matrix[r][c] = matrix[r][n-1-c]
      matrix[r][n-1-c] = tmp
    }
  }   

  for(let r = 0; r < n; r++) {
    for(let c = 0; c < n - r; c++) {
      let tmp = matrix[r][c]
      matrix[r][c] = matrix[n-1-c][n-1-r]
      matrix[n-1-c][n-1-r] = tmp
    }
  }
  return matrix
};