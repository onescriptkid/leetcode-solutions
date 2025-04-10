/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

  // 1 2 3 4 5 6 7 8 9
  // 1 2
  //   2 3
  //     3 4
  // 1   3
  
  // 1 2 3 4 5 6 7 8 9
  // 1   3
  //  2    4
  //         5   7
  // 1 2
  //   2 3
  //     3 4
  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)

  // console.log('intervals', intervals)
  let prevEnd = intervals[0][1]

  let removals = 0
  for(let i = 1; i < intervals.length; i++) {
    let curr = intervals[i]
    let [start, end] = curr
    // overlapping
    if(start < prevEnd) {
      removals++
      prevEnd = Math.min(end, prevEnd)
    } else {
      prevEnd = end
    }
  }
  return removals


};