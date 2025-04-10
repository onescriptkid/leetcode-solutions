/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {

  let min
  let index = -1
  for (let i = 0; i < points.length; i++) {
    let point = points[i]
    let [px, py] = point

    let isValid = false
    if(px === x || py === y) {
      isValid = true
    }
    if(isValid) {
      let dist = Math.abs(x - px) + Math.abs(y - py)
      if(min === undefined) {
        min = dist
        index = i
      } else if(dist < min) {
        min = dist
        index = i
      }
    }
  }   
  return index
};