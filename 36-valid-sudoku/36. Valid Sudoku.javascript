/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  function rowsValid(arr) {
    for(let i = 0; i < board.length; i++) {
      let set = new Set()
      for(let j = 0; j < board[i].length; j++) {
        let val = board[i][j]
        if(val === '.')continue
        if(set.has(val)) { 
          // console.log('row', set)
          return false
        }
        set.add(val)
      }
    }
    return true
  }

  // i 1 2 3
  //   4 5 6
  //   7 8 9

  function colsValid(arr) {
    for(let i = 0; i < 9; i++) {
      let set = new Set()
      for(let j = 0; j < 9; j++) {
        let val = arr[j][i]
        if(val === '.')continue
        if(set.has(val)) {
          // console.log('col', set)
          return false
        }
        set.add(val)
      }
    }
    return true
  }
  
  //    
  // 00 01 02
  // 10 11 12
  // 20 21 22
  //          66 67 68
  //          76 77 78
  //          86 87 88
  function boxesValid(arr) {

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        let set = new Set()
        for(let a = 0; a < 3; a++) {
          for(let b = 0; b < 3; b++) {
            // 22
            let val = arr[a + 3*i][b + 3*j]
            if(val === '.')continue
            if(set.has(val)) {
              // console.log('box', set)
              return false
            }
            set.add(val)
          }
        }

      }
    }
    return true

  }

  return rowsValid(board) && colsValid(board) && boxesValid(board)

};