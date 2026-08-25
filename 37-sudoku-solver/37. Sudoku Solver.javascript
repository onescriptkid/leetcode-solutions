/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

  function solve() {
    for(let r = 0; r < 9; r++) {
      for(let c = 0; c < 9; c++) {
        if(board[r][c] === '.') {
          for(let i = 1; i <= 9 ; i++) {
            let val = "" + i
            if(isValid(r,c,val)) {
              board[r][c] = val
              if(solve()) return true
              board[r][c] = '.'
            }
          }
          return false
        }
      }
    }
    return true
  }   

  function isValid(r,c, val) {
    for(let i = 0; i < 9; i++) {
      if(board[r][i] === val) return false
      if(board[i][c] === val) return false
    }

    let rs = r - r % 3
    let cs = c - c % 3

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(board[rs+i][cs+j] === val) return false
      }
    }

    return true
  }
  solve()
};