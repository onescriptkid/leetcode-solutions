/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  let out = new Array(m).fill(0).map(v => Array(n).fill(0))
  if(original.length !== (m * n)) return []


  // for(let i = 0; i < original.length; i++) {

  // }

  let i = 0
  for(let r = 0; r < m; r++) {
    for(let c = 0; c < n; c++) {
      out[r][c] = original[i]
      i++
    }
  }
  return out
};