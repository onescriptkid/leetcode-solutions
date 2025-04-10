/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {

  let rows = matrix.length
  let cols = matrix[0].length

  let out = new Array(cols).fill(0).map(v => new Array(rows).fill(0))


  //   a b c   
  //   d e f
  //   h i j

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      out[c][r] = matrix[r][c]
    }
  }
  return out
};