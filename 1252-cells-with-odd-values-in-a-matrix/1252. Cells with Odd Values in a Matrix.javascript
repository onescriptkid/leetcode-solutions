/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
  let rowmap = {}
  let colmap = {}
  for(let index of indices) {
    let [r,c] = index
    rowmap[r] = (rowmap[r] || 0) + 1
    colmap[c] = (colmap[c] || 0) + 1
  }   

  let out = 0
  for(let r = 0; r < m; r++) {
    for(let c = 0; c < n; c++) {
      let rinc = rowmap[r] || 0
      let cinc = colmap[c] || 0
      let sum = rinc + cinc
      if(sum % 2 === 1) {
        out++
      }
    }
  }
  return out
};