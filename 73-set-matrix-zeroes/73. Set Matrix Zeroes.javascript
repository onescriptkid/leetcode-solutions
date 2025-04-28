/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  //  5   5 5 5 5
  //      -------
  //  5 | 5 5 5 5
  //  5 | 5 5 5 5
  //  5 | 5 5 5 5
  //  5 | 5 5 5 5
  
  //  5   5 5 0 5
  //      -------
  //  5 | 5 5 0 5
  //  5 | 5 5 5 5
  //  5 | 5 5 5 5
  //  5 | 5 5 5 5

  let rows = matrix.length
  let cols = matrix[0].length
  let flag = false
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(matrix[r][c] === 0) {
        if(r === 0) {
          flag = true
        } else {
          matrix[0][c] = 0
          matrix[r][0] = 0
        }
      }
    }
  }

  // [1, r] and [1,c] box
  for(let r = 1; r < rows; r++) {
    for(let c = 1; c < cols; c++) {
      if(matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0
      }
    }
  }

  // rows+ (first column)
  for(let r = 0; r < rows; r++) {
    if(matrix[0][0] === 0) {
      matrix[r][0] = 0
    }
  }

  // cols+ (first row)
  for(let c = 0; c < cols; c++) {
    if(flag) {
      matrix[0][c] = 0
    }
  }

  return matrix

    
};