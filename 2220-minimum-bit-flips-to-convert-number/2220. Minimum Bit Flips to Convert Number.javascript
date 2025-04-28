/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {

  // 8421
  // 1010  = 10
  // 0111  = 7

  let count = 0
  let a = start
  let b = goal

  while(a > 0 || b > 0) {
    let abit = a & 1
    let bbit = b & 1

    if(abit !== bbit) {
      count++
    }

    a = a >>1
    b = b >>1
  }

  return count


};