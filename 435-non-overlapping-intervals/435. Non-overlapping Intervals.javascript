/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)   

  function isOverlapping(a,b) {
    return a[0] < b[1] && b[0] < a[1]
  }

  // 1 2 3 4 5 6
  // 1 2
  // 1   3
  //   2 3
  //     3 4

  // 0 1 2 3 4 5 6 
  // 0   2
  //   1   3          x
  //     2   4
  //       3   5      x
  //         4   6

  let i = 1
  let curr = intervals[0]
  let count = 0
  while(i < intervals.length) {
    let inc = intervals[i]

    if(isOverlapping(curr, inc)) {
      if(inc[1] < curr[1]) {
        curr = inc
      }
      count++
    } else {
      curr = inc
    }
    i++
  }
  return count
};