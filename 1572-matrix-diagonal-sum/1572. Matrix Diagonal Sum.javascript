/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let rows = mat.length
  let cols = mat[0].length 
  let out = 0
  // 7 3 1 9
  // 3 4 6 9
  // 6 9 6 6
  // 9 5 8 5
  for(let i = 0; i < rows; i++) {
    // console.log('i', i, rows-1-i, 'diag', mat[i][i], mat[rows-1-i][rows-1-i])

    let diag = mat[i][i]
    out+=diag
    if((rows-1-i) !== i) {
      let diag = mat[i][rows-1-i]
      out+=diag
    }
  }

  return out
};