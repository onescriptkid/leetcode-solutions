/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  // 5   5 5 5 5   
  //     -------
  // 5 | 5 5 5 5   
  // 5 | 5 5 5 5   
  // 5 | 5 5 5 5   
  // 5 | 5 5 5 5   
  
  // iterate
  let corner = false
  let rows = matrix.length
  let cols = matrix[0].length
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(matrix[r][c] === 0) {
        if(r === 0) {
          corner = true
        } else {
          matrix[r][0] = 0
          matrix[0][c] = 0
        }
      }
    }
  }

  // rows 1+ cols 1+
  for(let r = 1; r < rows; r++) {
    for(let c = 1; c < cols; c++) {
      if(matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0
      }
    }
  }

  // row 0 (cols)
  for(let r = 0; r < rows; r++) {
    if(matrix[0][0] === 0) {
      matrix[r][0] = 0
    }
  }

  // col 0 (rows)
  for(let c = 0; c < cols; c++) {
    if(corner === true) {
      matrix[0][c] = 0
    }
  }
  return matrix
};