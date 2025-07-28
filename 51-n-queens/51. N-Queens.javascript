/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let board = new Array(n).fill(0).map(v => new Array(n).fill('.'))   
  let out = []
  function bt(r) {
    if(r === n) {
      out.push(board.map(v => v.join('')))
      return
    }

    for(let c = 0; c < n; c++) {
      if(isValid(r,c)) {
        board[r][c] = 'Q'
        bt(r + 1)
        board[r][c] = '.'
      }
    }
  }
  bt(0)
  return out
  function isValid(r,c) {
    for(let i = 0; i < r; i++) {
      if(board[i][c] === 'Q') return false
    }
    for(let i=r,j=c; i>=0 && j>=0; i--,j--) {
      if(board[i][j] === 'Q') return false
    }
    for(let i=r,j=c; i>=0 && j <n; i--,j++) {
      if(board[i][j] === 'Q') return false
    }
    return true
  }
};