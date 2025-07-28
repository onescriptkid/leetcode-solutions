/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)   

  // a0   a1
  //    b0   b1
  let isOverlapping = (a,b) => a[1] >= b[0] && a[0] <= b[1]

  let i = 0
  let inc = newInterval
  let out = []
  while(i < intervals.length) {
    let curr = intervals[i] 
    if(isOverlapping(curr,inc)) {
      inc = [Math.min(curr[0],inc[0]), Math.max(curr[1], inc[1])]
    } else {
      if(inc[1] < curr[1]) {
        out.push(inc)
        inc = curr
      } else {
        out.push(curr)
      }
      // 1 2 3 4 5 6 7 8 9
      // 1   3
      //           6     9
      
    }
    i++ 
  }
  out.push(inc)
  return out

};