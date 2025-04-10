/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {


  let x = 0
  let y = 0
  for(let move of moves) {
    if(move === "U") {
      y++
    }
    if(move === "D") {
      y--
    }
    if(move === "R") {
      x++
    }
    if(move === "L") {
      x--
    }
  }
  return x === 0 && y === 0
};