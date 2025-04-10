/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {

  for(let r = 0; r < matrix.length; r++) {
    let set = new Set()
    for(let c = 0; c < matrix[r].length; c++) {
      let val = matrix[r][c]
      set.add(val)
    }
    if(set.size !== matrix.length) return false
  }
  for(let c = 0; c < matrix[0].length; c++) {
    let set = new Set()
    for(let r = 0; r < matrix.length; r++) {
      let val = matrix[r][c]
      set.add(val)
    }
    if(set.size !== matrix.length) return false
  }
  return true
};