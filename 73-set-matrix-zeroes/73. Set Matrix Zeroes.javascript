/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

  let flag = false
  let rows = matrix.length
  let cols = matrix[0].length
  for(let r = 0; r < rows; r++) {
    for(let c =0 ; c < cols; c++) {
      if(matrix[r][c] === 0) {
        if(r !== 0) {
          matrix[0][c] = 0
          matrix[r][0] = 0
        } else {
          flag = true
        }
      }
    }
  }

  // rows+1, cols+1 
  for(let r = 1; r < rows; r++) {
    for(let c = 1; c < cols; c++) {
      if(matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0
      }
    }
  }
  // console.log(matrix)

  // rows
  for(let r = 0; r < rows; r++) {
    if(matrix[0][0] === 0) matrix[r][0] = 0
  }

  // cols
  for(let c = 0; c < cols; c++) {
    if(flag) matrix[0][c] = 0
  }

  //     c c c 0 c

  //  r  a b c d e
  //  r  a b c d e
  //  0  a b c 0 e
  //  r  a b c d e
};