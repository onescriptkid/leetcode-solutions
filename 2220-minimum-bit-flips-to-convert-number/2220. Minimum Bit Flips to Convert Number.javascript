/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
  // 8421
  // 1010
  // 0111    

  // 0010
  // 0110
  // 0111

  // 011
  // 100

  // ""
  let mstart = start.toString(2)
  let mgoal  = goal.toString(2)

  let i = mstart.length - 1;
  let j = mgoal.length - 1;
  let count = 0
  console.log(mstart, mgoal)
  while(i >= 0 || j >= 0) {
    let s = mstart[i] || "0"
    let g = mgoal[j] || "0"
    // console.log(i, j, '-', s, g)
    if(s !== g) {
      count++
      // console.log('  count', count)
    }
    i--
    j--
  }
  return count
};