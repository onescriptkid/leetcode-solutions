/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

  // next, curr  
  //    0     0
  //    0     1     => 1
  //    1     0     =>
  //    1     1


  // two pass
  let rows = board.length
  let cols = board[0].length

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      let up = peek(r-1,c)
      let dn = peek(r+1,c)
      let ri = peek(r,c+1)
      let le = peek(r,c-1)

      let d0 = peek(r-1,c-1)
      let d1 = peek(r+1,c+1)
      let d2 = peek(r-1,c+1)
      let d3 = peek(r+1,c-1)
      // console.log('r c', r, c,'-', board[r][c], '-', up, dn, ri, le)

      // 1) under
      let total = up + dn + ri + le + d1 + d2 + d3 + d0
      let live = board[r][c] & 1
      if(live && total < 2) {
        board[r][c] = board[r][c]
        continue
      }

      // 2) lives on
      if(live && (total === 3 || total===2)){
        board[r][c] = board[r][c] | 2
        continue
      }

      // 3) overpop
      if(live && (total === 4)) {
        board[r][c] = 1
        continue
      }

      // 4
      if(live === 0 && total === 3) {
        board[r][c] = 2
        continue
      }
    }
  }
  // console.log('board', board)

  // 0 1 0    0 
  // 0 0 1
  // 0 0 1
  // 1 1 1
  // 0 0 0

  function peek(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return 0
    return board[r][c] & 1
  }

  for(let r = 0; r < rows; r++) {
    for(let c = 0;c < cols; c++) {
      board[r][c] = board[r][c] >> 1
    }
  }

};