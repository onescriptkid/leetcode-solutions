/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  function isOverlapping(a,b) {

    return a[0] < b[1] && b[0] < a[1]
    // a0    a1
    //    b0   b1
  }

  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)
  // console.log(intervals)

  let curr = intervals[0]
  let i = 1
  let count = 0
  while(i < intervals.length) {
    let inc = intervals[i]
    // console.log('curr', curr, 'inc', inc)
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

  // 1 2 3 4 5 6 7
  // 1 2
  //   2 3
  //     3 4
  // 1   3
};