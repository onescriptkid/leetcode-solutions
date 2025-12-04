/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {

  // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16   
  // 1         6
  //   2           8
  //             7           12
  //                   10                16

  points.sort((a,b) => a[0] > b[0] ? 1 : -1)
  function isOverlapping(a,b) {
    // a0      a1
    //     b0     b1
    return a[0] <= b[1] && b[0] <= a[1]
  }

  // console.log(points)

  let i = 1
  let count = 1
  let curr = points[0]
  while(i < points.length) {
    let  inc = points[i]
    // console.log('curr', curr, 'inc', inc, 'c', count)

    if(isOverlapping(inc, curr)) {
      curr = [Math.max(inc[0], curr[0]), Math.min(inc[1], curr[1])]
    } else {
      curr = inc
      count++
    }
    i++
  } 

  return count
};