/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {


  // [1,2,3]    0
  // [1,2,1]    0
  // [1,1,1]    1


  // 2 2 2 3 3  0
  // 2 2 2 3 2  1
  // 2 2 2 2 2  2
  
  // 2 4 6 8    1 3 5 7
  // 8 8 8 8    7 7 7 7
  // 8 8 8 8    7
  let odds = 0
  let evens = 0
  for(let p of position) {
    if(p % 2 ===0) {
      evens++
    }
    if(p % 2 === 1) {
      odds++
    }
  }
  return Math.min(odds, evens)

};