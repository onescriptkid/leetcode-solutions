/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)   

  // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
  // 1   3
  //   2       6
  //               8   10

  function isOverlapping(a,b) {
    return a[0] <= b[1] && b[0] <= a[1]
  }


  let i = 1
  let curr = intervals[0]
  let out = []
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