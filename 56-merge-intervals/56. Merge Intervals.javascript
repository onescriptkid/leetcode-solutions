/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // a0   a1
  //    b0   b1
  let isOverlapping = (a,b) => a[1] >= b[0] && a[0] <= b[1]

  // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
  //   1   3
  //     2       6
  //                 8   10
  //                                    15       18
  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)

  let curr = intervals[0]
  let out = []

  let i = 1
  while(i < intervals.length) {
    let inc = intervals[i]

    if(isOverlapping(curr, inc)) {
      curr = [Math.min(curr[0],inc[0]), Math.max(curr[1], inc[1])]
    } else {
      out.push(curr)
      curr = inc
    }
    i++
  }
  out.push(curr)
  return out

};