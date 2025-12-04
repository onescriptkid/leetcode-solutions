/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {

  // e e e e e
  // e e m e e
  // e e e e e
  // e e e e e


  // b b b b b 
  // e e m m e
  // e e e e e
  // e e e e e

  let rows = board.length
  let cols = board[0].length

  function dfs(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return
    if(board[r][c] !== 'E') return

    // Look at neighbors
    let up = peek(r-1, c)
    let dn = peek(r+1, c)
    let le = peek(r, c-1)
    let ri = peek(r, c+1)

    let d0 = peek(r-1, c-1)
    let d1 = peek(r+1, c+1)
    let d2 = peek(r-1, c+1)
    let d3 = peek(r+1, c-1)

    let total = up+dn+le+ri+d0+d1+d2+d3

    if(total !== 0) {
      board[r][c] = ""+total
      return
    }

    board[r][c] = 'B'
    dfs(r,c+1)
    dfs(r,c-1)
    dfs(r+1,c)
    dfs(r-1,c)
    dfs(r+1,c+1)
    dfs(r-1,c-1)
    dfs(r+1,c-1)
    dfs(r-1,c+1)
  }

  let [r,c] = click
  if(board[r][c] === 'M') board[r][c] = 'X'
  dfs(r,c)

  function peek(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return 0
    if(board[r][c] === 'X' || board[r][c] === 'M') return 1
    return 0
  }

  return board

  // for(let r = 0; r < rows; r++) {
  //   for(let c = 0; c < cols; c++) {
      
  //   }
  // }
};