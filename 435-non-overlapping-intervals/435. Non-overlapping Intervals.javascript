/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

  // 1 2 3 4 5 6 7 8 9
  // x x
  // x   x
  //   x x
  //     x x
  
  // 1 2 3 4 5 6 7 8 9
  // x               x
  //   x         x
  //             x x
  //               x x

  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)

  function isOverlapping(a,b) {
    // a0    a1
    //    b0    b1
    if(b[0] < a[1] && a[0] < b[1]) {
      return true
    }
    return false
  }

  let curr = intervals[0]
  let i = 1
  let removals = 0
  while(i < intervals.length) {
    let inc = intervals[i]
    if(!isOverlapping(inc, curr)) {
      curr = inc
    } else {
      removals++
      if(curr[1] >= inc[1]) {
        curr = inc
      }
    }
    i++
  }
  return removals


};