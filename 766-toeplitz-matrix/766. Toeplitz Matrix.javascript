/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  let rows = matrix.length
  let cols = matrix[0].length
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {

      if(matrix[r-1] !== undefined && matrix[r-1][c-1] !== undefined) {
        if(matrix[r-1][c-1] !== matrix[r][c]) return false
      }
    }
  }  
  return true
};