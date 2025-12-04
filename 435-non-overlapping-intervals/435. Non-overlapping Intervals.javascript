/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    
  function isOverlapping(a,b) {
    // a0      a1
    //      b0    b1
    return a[0] < b[1] && b[0] < a[1]
  }

  // 1 2 3 4 5 6 7 8 9
  // 1 2
  // 1   3
  //   2 3
  //     3 4

  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)


  let curr = intervals[0]
  let i = 1
  let count = 0
  while(i < intervals.length) {
    let inc = intervals[i]
    if(isOverlapping(curr,inc)) {
      count++
      if(inc[1] < curr[1]) {
        curr = inc
      }
    } else {
      curr = inc
    }
    i++
  }
  return count
};