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
  while(out.length < rows * cols) {

    while(peek(r,c+1)) {
      c++
      out.push(matrix[r][c])
      matrix[r][c] = '#'
    }
    while(peek(r+1,c)) {
      r++
      out.push(matrix[r][c])
      matrix[r][c] = '#'
    }
    while(peek(r,c-1)) {
      c--
      out.push(matrix[r][c])
      matrix[r][c] = '#'
    }
    while(peek(r-1, c)) {
      r--
      out.push(matrix[r][c])
      matrix[r][c] = '#'
    }
  }   
  return out

  function peek(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return false
    if(matrix[r][c] === '#') return false

    return true
  }
};