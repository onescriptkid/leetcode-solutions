/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  function isOverlapping(a,b) {
    // a0   a1
    //    b0    b1
    return a[0] <= b[1] && b[0] <= a[1]
  }  

  // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
  // 1   3
  //           6     9
  //   2     5
  let out = []
  let inc = newInterval
  let i = 0;
  while(i < intervals.length) {
    let curr = intervals[i]
    if(isOverlapping(inc, curr)) {
      inc = [Math.min(inc[0], curr[0]), Math.max(inc[1], curr[1])]
    } else {
      if(inc[0] < curr[0]) {
        out.push(inc)
        inc = curr
      } else {
        out.push(curr)
      }
    }
    i++
  }
  out.push(inc)

  return out
};