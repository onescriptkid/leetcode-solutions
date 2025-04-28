/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {

  let rinc = {}
  let cinc = {}
  for(let [r,c] of indices) {
    rinc[r] = (rinc[r] || 0) + 1
    cinc[c] = (cinc[c] || 0) + 1
  }

  let oddRows = 0
  for(let r of Object.keys(rinc)) {
    if(rinc[r] % 2 === 1) {
      oddRows++
    }
  }

  let oddCols = 0
  for(let c of Object.keys(cinc)) {
    if(cinc[c] % 2 === 1) {
      oddCols++
    }
  }

  let evenRows = m - oddRows
  let evenCols = n - oddCols

  return evenRows * oddCols + evenCols * oddRows

};