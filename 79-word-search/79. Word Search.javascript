/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

  let rows = board.length
  let cols = board[0].length
  let visited = new Array(rows).fill(0).map(v => new Array(cols).fill(0))


  //    0 1 2 3
  // 0  a b c e
  // 1  s f c s
  // 2  a d e e

  function bt(r, c, i) {
    // console.log('r c', r, c, 'sub', word.substring(0, i))
    if(r < 0 || r >= rows || c < 0 || c >= cols) {
      return false
    }
    if(board[r][c] !== word[i]) {
      return false
    }
    if(visited[r][c] === 1) return false
    if(i === word.length - 1) {
      return true
    }

    visited[r][c] = 1
    if(bt(r,c+1, i+1)) return true
    if(bt(r,c-1, i+1)) return true
    if(bt(r+1,c, i+1)) return true
    if(bt(r-1,c, i+1)) return true
    visited[r][c] = 0
  }


  for(let r = 0;r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      let ans = bt(r, c, 0)
      if(ans) return true
    }
  }   
  return false
};