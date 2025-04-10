/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {

  let lcount = 0
  let rcount = 0
  let bcount = 0

  for(let i = 0; i < moves.length; i++) {
    let move = moves[i]
    if(move === 'L') lcount++
    if(move === 'R') rcount++
    if(move === '_') bcount++
  }

  return Math.abs(lcount - rcount) + bcount
};