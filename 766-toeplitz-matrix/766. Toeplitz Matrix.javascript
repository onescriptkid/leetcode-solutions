/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let curr = matrix[i][j]
      if(matrix[i-1] === undefined) continue
      if(matrix[i-1][j-1] === undefined) continue
      if(curr !== matrix[i-1][j-1]) return false
    }
  } 
  return true
};