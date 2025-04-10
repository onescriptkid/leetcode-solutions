/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
  let maxcols = {} // c:max
  for(let c = 0; c < matrix[0].length; c++) {
    let max
    for(let r = 0; r < matrix.length; r++) {
      let val = matrix[r][c]
      if(val !== -1) {
        if(max === undefined) {
          max = val
        } else if(val > max) {
          max = val
        }
      }
    }
    maxcols[c] = max
  }   

  for(let r = 0; r < matrix.length; r++) {
    for(let c = 0; c < matrix[r].length; c++) {
      if(matrix[r][c] === -1) {
        matrix[r][c] = maxcols[c]
      }
    }
  }
  return matrix
};