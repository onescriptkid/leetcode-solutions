/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

  intervals = intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)   

  function isOverlapping(a,b) {

    // a0    a1
    //    b0    b1
    if(b[0] <=a[1] && a[0] <=b[1]) {
      return true
    }
    return false
  }

  let out = []
  let curr = intervals[0]
  let i = 1
  while(i < intervals.length) {
    let inc = intervals[i]
    if(isOverlapping(curr, inc)) {
      let merge = [Math.min(curr[0], inc[0]), Math.max(curr[1], inc[1])]
      curr = merge
    } else {
      out.push(curr)
      curr = inc
    }
    i++
  }
  out.push(curr)
  return out

};