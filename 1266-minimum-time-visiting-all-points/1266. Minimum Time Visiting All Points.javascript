/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {

  // 1,1  ->  3,4  
  // 2,2  ->  3,4  
  // 3,3  ->  3,4  
  // 3,4  ->  3,4  

  // 2,3 diff
  // 0,3

  let count = 0
  for(let i = 0; i < points.length-1; i++) {
    let curr = points[i]
    let next = points[i+1]

    let dx = Math.abs(curr[0] -next[0])
    let dy = Math.abs(curr[1] - next[1])
    // console.log('curr', curr, 'next', next, 'dxdy', dx, dy)
    let max = Math.max(dx,dy)

    count+=max
  }
  return count
};