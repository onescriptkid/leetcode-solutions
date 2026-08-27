/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)   

  function isOverlapping(a,b) {
    // a0   a1
    //   b0    b1
    return a[0] <= b[1] && b[0] <= a[1]
  }
  let out = []
  let curr = newInterval
  let i = 0
  while(i < intervals.length) {
    let inc = intervals[i]

    if(isOverlapping(curr, inc)) {
      curr = [Math.min(curr[0], inc[0]), Math.max(curr[1], inc[1])]
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