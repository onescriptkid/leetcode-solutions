/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

  let out = []
  let rows = matrix.length
  let cols = matrix[0].length
  let visited = new Array(rows).fill(0).map(v => new Array(cols).fill(0))

  let r = 0
  let c = -1
  let i = 0
  while(i < rows * cols) {

    while(peek(r, c+1)) {
      c++
      out.push(matrix[r][c])
      visited[r][c] = 1
      i++
    }
    while(peek(r+1, c)) {
      r++
      out.push(matrix[r][c])
      visited[r][c] = 1
      i++
    }
    while(peek(r, c-1)) {
      c--
      out.push(matrix[r][c])
      visited[r][c] = 1
      i++
    }
    while(peek(r-1,c)) {
      r--
      out.push(matrix[r][c])
      visited[r][c] = 1
      i++
    }
  }

  function peek(r, c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return false
    if(visited[r][c] === 1) return false
    return true
  }

  return out

};