/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let rows = board.length
  let cols = board[0].length

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      let ri = peek(r, c+1)
      let le = peek(r, c-1)
      let t = peek(r+1,c)
      let b = peek(r-1,c)

      let d0 = peek(r+1, c+1)
      let d1 = peek(r+1, c-1)
      let d2 = peek(r-1, c+1)
      let d3 = peek(r-1, c-1)

      let sum = ri + le + t + b + d0 + d1 + d2 + d3
      let curr = board[r][c] & 1

      if(curr === 1 && sum < 2) continue
      if(curr === 1 && sum >= 2 && sum <= 3) board[r][c] = board[r][c] | 2
      if(curr === 1 && sum > 3) continue
      if(curr === 0 && sum === 3) board[r][c] = board[r][c] | 2

    }
  }   

  function peek(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return 0

    return board[r][c] & 1
  }

  for(let r = 0; r < rows; r++) {
    for(let c= 0; c < cols; c++) {
      board[r][c] = board[r][c] >> 1
    }
  }
};