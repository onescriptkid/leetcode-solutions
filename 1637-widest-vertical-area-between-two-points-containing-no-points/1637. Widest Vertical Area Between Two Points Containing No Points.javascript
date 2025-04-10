/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {

  points.sort((a, b) => {
    if(a[0] > b[0]) {
      return 1
    } else {
      return -1
    }
  }) 
  // console.log(points)

  let prev
  let max

  for(let point of points) {
    if(prev !== undefined) {
      let width = point[0] - prev[0]
      if(max === undefined) {
        max = width
      } else if(width > max ) {
        max = width
      }
    }
    prev = point
  }
  return max
};