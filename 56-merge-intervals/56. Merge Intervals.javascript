/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

  function isOverlapping(a,b) {
    // a0    a1
    //    b0    b1

    return a[0] <= b[1] && b[0] <= a[1]
  }   

  // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
  // 1   3  
  //   2       6
  //               8   10
  //                                  15        18


  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)

  let inc = intervals[0]
  let i = 1
  let out = []
  while(i < intervals.length) {
    let curr = intervals[i]
    if(isOverlapping(curr, inc)) {
      inc = [Math.min(curr[0], inc[0]), Math.max(curr[1], inc[1])]
    } else {
      if(curr[1] < inc[1]) {
        out.push(curr)
      } else {
        out.push(inc)
        inc = curr
      }
    }
    i++
  }
  out.push(inc)

  return out

};