/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {

  let orig = []
  for(let r = 0; r < mat.length; r++) {
    let row = []
    for(let c = 0; c < mat[r].length; c++) {
      row.push(mat[r][c])
    } 
    orig.push(row)
  }
  // console.log('orig', orig)

  for(let i = 0; i < k; i++) {
    for(let r = 0; r < mat.length; r++) {
      if(r % 2 === 0) {
        mat[r].push(mat[r].shift())
      } else {
        mat[r].unshift(mat[r].pop())
      }
    }
  }
  // console.log(mat)
  for(let r = 0; r < mat.length; r++) {
    for(let c = 0; c < mat[r].length; c++) {
      if(orig[r][c] !== mat[r][c]) return false
    }
  }
  return true
};