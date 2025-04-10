/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
  let arr = s.split('')
  let moves = 0
  for(let i = 0; i < arr.length; i++) {
    let c = arr[i]
    if(c === 'X') {
      arr[i] = 'O'
      if(arr[i+1] !== undefined) arr[i+1] = 'O'
      if(arr[i+2] !== undefined) arr[i+2] = 'O'
      moves++
    }
  }
  return moves
};