/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

  let rows = board.length
  let cols = board[0].length


  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(bt(r,c,0)) {
        return true
      }
    }
  }   

  return false

  function bt(r, c, i) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return false
    let char = board[r][c]
    if(char !== word[i]) return false

    if(i === word.length - 1) return true

    board[r][c] = '#'
    let out = 
    bt(r,c+1, i+1) ||
    bt(r,c-1, i+1) ||
    bt(r+1,c, i+1) ||
    bt(r-1,c, i+1)
    board[r][c] = char
    return out
  }


};