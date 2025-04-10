/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {


  function isOverlapping(a, b) {
    // 1 2 3 4 5 6
    // a0    a1
    //     b0    b1 
    if(a[0] <= b[1] && a[1] >= b[0]) {
      return true
    }
    
    // 1 2 3 4 5 6
    // a0    a1
    //     b0    b1 
    return false
  }

  let out = []
  let incInterval = [...newInterval]
  let merged = false
  let i = 0
  // [1,2] [3,5] [6,7] [8,10] [12,16]  [2,5]
  // i
  while(i < intervals.length) {
    let curr = intervals[i]
    let next = intervals[i+1]
    // console.log(curr, 'inc', incInterval, 'out', out)
    // Just iterate if merged
    if(merged) {
      out.push(curr)
      i++
      continue
    }

    let overlapping = isOverlapping(curr,incInterval)
    // Not overlapping
    // [1 3] [6 9]   [7 8]
    // [1 3] [6 9]   [4 5]
    // [3 4] [8 9]   [1 2]
    if(!overlapping) {
      // Next overlapping
      if(next !== undefined && isOverlapping(next, incInterval)) {
        out.push(curr)
        i++
        continue
      } else {
        if(curr[0] < incInterval[0]) {
          out.push(curr)
          i++
          continue
        } else {
          out.push(incInterval)
          merged=true
          continue
        }
      }
    }

    // Merge interval
    if(overlapping) {
      incInterval = [Math.min(curr[0], incInterval[0]), Math.max(curr[1], incInterval[1])]
    }
    // Append
    if(next !== undefined && isOverlapping(next, incInterval)) {
      i++
      continue
     // 
    } else {
      out.push(incInterval)
      i++
      merged = true
    }
  }
  if(merged === false) {
    out.push(incInterval)
  }

  return out
};