/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

  // .   1 1 0 x 1   => flag
  //     ---------
  // 1 | 1 1 1 1 1
  // 1 | 1 1 1 1 1
  // 0 | 1 1 x 1 1
  // x | 1 1 1 1 1   => matrix[0][0]

  let flag = false   
  let rows = matrix.length
  let cols = matrix[0].length

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(matrix[r][c] === 0) {
        if(r === 0) {
          flag = true
        } else {
          matrix[r][0] = 0
          matrix[0][c] = 0
        }
      }
    }
  }

  // 1+rows, 1+cols
  for(let r = 1; r < rows; r++) {
    for(let c = 1; c < cols; c++) {
      if(matrix[r][0] === 0 || matrix[0][c] === 0) matrix[r][c] = 0
    }
  }

  // cols, 0-r
  if(matrix[0][0] === 0) {
    for(let r = 0; r < rows; r++) {
      matrix[r][0] = 0  
    }
  }

  // rows, 0-c
  if(flag) {
    for(let c = 0; c < cols; c++) {
      matrix[0][c] = 0
    }
  }

  return matrix
  
};