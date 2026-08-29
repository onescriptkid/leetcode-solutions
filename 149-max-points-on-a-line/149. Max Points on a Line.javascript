/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let max = 1
  for(let [x0, y0] of points) {
    let slopes = new Map()
    for(let [x1, y1] of points) {
      if(x0 === x1 && y0 === y1) continue

      let dy = y1 - y0
      let dx = x1 - x0

      let slope = dy/dx
      if(slope === -Infinity) slope = Infinity

      slopes.set(slope, (slopes.get(slope) || 1) + 1) 
      max = Math.max(max, slopes.get(slope))
    }
  }   
  return max
};