/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  let board = new Array(3).fill('-').map(v => new Array(3).fill('-'))
  let winner = 'Pending'
  for(let i = 0; i < moves.length; i++) {
    let move = moves[i]
    let [r,c] = move
    if(i % 2 === 0) {
      board[r][c] = 'x'
    } else {
      board[r][c] = 'o'
    }
    winner = isWinner()
    if(winner === 'A' || winner === 'B' || winner === 'Draw') {
      // console.log('board', board)
      return winner
    }
  }   

  function isWinner() {

    for(let r = 0; r < 3; r++) {
      let allx = true
      let allo = true
      for(let c = 0; c < 3; c++) {
        let val = board[r][c]
        if(val !== 'o') allo = false
        if(val !== 'x') allx = false
      }
      if(allx) {
        return 'A'
      }
      if(allo) {
        return 'B'
      }
    }
    for(let r = 0; r < 3; r++) {
      let allx = true
      let allo = true
      for(let c = 0; c < 3; c++) {
        let val = board[c][r]
        if(val !== 'o') allo = false
        if(val !== 'x') allx = false
      }
      if(allx) {
        return 'A'
      }
      if(allo) {
        return 'B'
      }
    }
    let dallx = true
    let dallo = true
    for(let i = 0; i < 3; i++) {
        let val = board[i][i]
        if(val !== 'o') dallo = false
        if(val !== 'x') dallx = false
    }
    if (dallx) {
      return 'A'
    }
    if (dallo) {
      return 'B'
    }
    let dallx2 = true
    let dallo2 = true
    for(let i = 0; i < 3; i++) {
        let val = board[i][2-i]
        if(val !== 'o') dallo2 = false
        if(val !== 'x') dallx2 = false
    }
    if (dallx2) {
      return 'A'
    }
    if (dallo2) {
      return 'B'
    }
    let draw = true
    for(let r = 0; r < 3; r++) {
      for(let c = 0; c < 3; c++) {
        let val = board[r][c]
        if(val ==='-') draw = false
      }
    } 
    if(draw) return 'Draw'
    return 'Pending'
  }
  return winner
};