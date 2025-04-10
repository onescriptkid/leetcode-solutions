/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let sum = 0
  for(let r = 0; r < mat.length; r++) {
    for(let c = 0; c < mat[0].length; c++) {
      if(r === c) {
        sum+=mat[r][c]
      } else if(r === mat.length - 1 - c) {
        sum+=mat[r][c]
      }
    }
  }
  return sum

};