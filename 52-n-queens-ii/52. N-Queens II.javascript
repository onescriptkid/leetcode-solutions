/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let board = new Array(n).fill(0).map(v => new Array(n).fill(0))   

  let count = 0
  function bt(r) {
    if(r === n) {
      count++
      return
    }

    for(let c = 0; c < n; c++) {
      
      if(place(r,c)) {
        board[r][c] = 1
        bt(r+1)
        board[r][c] = 0
      }
    }
  }
  bt(0)
  return count

  function place(r,c) {
    for(let i = 0; i < r; i++) {
      if(board[i][c] === 1) return false
    }

    for(let i = r, j = c; i >= 0 && j >= 0; i--,j--) {
      if(board[i][j] === 1) return false
    }
    for(let i = r, j = c; i >= 0 && j < n; i--,j++) {
      if(board[i][j] === 1) return false
    }
    return true
  }
};