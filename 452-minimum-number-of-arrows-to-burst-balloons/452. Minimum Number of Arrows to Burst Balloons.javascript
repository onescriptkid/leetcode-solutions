/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a,b) => a[0] > b[0] ? 1 : -1)   

  function isOverlapping(a,b) {
    // a0   a1
    //    b0    b1
    return a[0] <= b[1] && b[0] <= a[1]
  }

  let i = 1
  let curr = points[0]
  let count = 1 

  while(i < points.length) {
    let inc = points[i]
    if(isOverlapping(curr, inc)) {
      curr =  [Math.max(curr[0], inc[0]), Math.min(curr[1], inc[1])]
    } else {
      curr = inc
      count++
    }
    i++
  }
  return count
};