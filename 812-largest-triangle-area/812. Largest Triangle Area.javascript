/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  let max = undefined
  for (let i = 0; i < points.length - 2; i++) {
    let [xi, yi] = points[i]
    for(let j = 1; j < points.length - 1; j++) {
      let [xj, yj] = points[j]
      for(let k = 2; k < points.length; k++) {
        let area = getArea(points[i], points[j],points[k])
        if(max === undefined) {
          max = area
        } else if( area > max) {
          max = area
        }
      } 
    }
  } 
  function getArea(p0, p1, p2) {
    // console.log(p0, p1, p2)
    return 0.5 * Math.abs(p0[0] * (p1[1] - p2[1]) + p1[0] * (p2[1] - p0[1]) + p2[0] * (p0[1] - p1[1]) )
  }
  return max
};