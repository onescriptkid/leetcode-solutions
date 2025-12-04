/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

  let rows = matrix.length
  let cols = matrix[0].length

  let r = 0
  let c = -1   
  let out = []
  let length = rows*cols

  while(out.length < length) {
    while(peek(r,c+1)) {
      c++
      let val = matrix[r][c]
      out.push(val)
      matrix[r][c] = '#'
    }
    while(peek(r+1,c)) {
      r++
      let val = matrix[r][c]
      out.push(val)
      matrix[r][c] = '#'
    }
    while(peek(r, c-1)) {
      c--
      let val = matrix[r][c]
      out.push(val)
      matrix[r][c] = '#'
    }
    while(peek(r-1, c)) {
      r--
      let val = matrix[r][c]
      out.push(val)
      matrix[r][c] = '#'
    }
  }

  function peek(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return false
    if(matrix[r][c] === '#') return false

    return true
  }
  return out
};