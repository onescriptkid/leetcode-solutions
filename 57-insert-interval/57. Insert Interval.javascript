/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

  function isOverlapping(a,b) {
    // a0    a1
    //    b0    b1
    return a[0] <= b[1] && b[0] <= a[1]
  }   

  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)

  // 1 2 3 4 5 6 7 8 9
  // 1   3
  //           6     9
  //   2     5

  let i = 0
  let curr = newInterval
  let out = []
  while(i < intervals.length) {
    let inc = intervals[i]
    if(isOverlapping(inc, curr)) {
      curr = [Math.min(inc[0], curr[0]), Math.max(inc[1], curr[1])]
    } else {
      if(curr[0] < inc[0]) {
        out.push(curr)
        curr = inc
      } else {
        out.push(inc)
      }
    }
    i++
  }
  out.push(curr)
  return out

};