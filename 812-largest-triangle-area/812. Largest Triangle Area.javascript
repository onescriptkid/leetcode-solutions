/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {

  let max = undefined
  for(let i = 0; i < points.length; i++) {
    for(let j = i +1; j < points.length; j++) {
      for(let k = j+1; k < points.length; k++) {
        let area = getArea(points[i], points[j], points[k])
        if(max === undefined) {
          max = area
        } else if(area > max) {
          max = area
        }
      }
    }
  }


  function getArea(p0, p1, p2) {

    return 0.5 * Math.abs(p0[0] *(p1[1] - p2[1]) + p1[0] * (p2[1] -p0[1]) + p2[0] *(p0[1] -p1[1]) )
  }

  return max

};