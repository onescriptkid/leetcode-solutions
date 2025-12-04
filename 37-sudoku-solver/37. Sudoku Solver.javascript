/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  function solve() {
    for(let r = 0; r < 9; r++) {
      for(let c = 0; c< 9; c++) {
        if(board[r][c] === '.') {
          for(let i = 1; i <= 9; i++) {
            let num = '' + i
            if(isValid(r,c, num)) {
              board[r][c] = num
              if(solve()) {
                return true
              }
              board[r][c] = '.'
            }
          }
          return false
        }
      }
    }
    return true
  }   
  solve()
  return board

  function isValid(r,c, num) {
    // console.log('r c num', r,c, num)
    for(let i = 0; i < 9; i++) {
      if(board[r][i] === num) return false
      if(board[i][c] === num) return false
    }

    let rbox = Math.floor(r / 3) * 3
    let cbox = Math.floor(c / 3) * 3

    for(let i = 0; i < 3; i++) {
      for(let j =0; j < 3; j++) {
        if(board[rbox+i][cbox+j] === num) return false
      }
    }
    return true
  }
};