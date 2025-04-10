/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {


  let rows = board.length
  let cols = board[0].length
  let count = 0

  function attack(r, c, dir) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) {
      return
    }
    if(board[r][c] === 'B') {
      return
    }
    if(board[r][c] === '.') {
      if(dir === 'r') {
        attack(r, c+1, dir)
      } else if(dir === 'l') {
        attack(r, c-1, dir)
      } else if(dir === 'u') {
        attack(r-1, c, dir)
      } else if(dir === 'd') {
        attack(r+1, c, dir)
      }
    }
    if(board[r][c] === 'p') {
      count++
      return
    }
  }

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c< cols; c++) {
      if(board[r][c] === 'R') {

        attack(r-1,c, 'u')
        attack(r+1,c, 'd')
        attack(r,c+1, 'r')
        attack(r,c-1, 'l')
      }
    }
  }

  return count
};