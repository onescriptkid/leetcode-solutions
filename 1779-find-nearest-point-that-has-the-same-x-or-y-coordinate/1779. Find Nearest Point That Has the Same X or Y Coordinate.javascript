/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {

  let mini
  let mindist
  for(let i = 0; i < points.length; i++) {

    let dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
    if(x !== points[i][0] && y !== points[i][1]) {
      continue
    }

    if(mindist === undefined) {
      mindist = dist
      mini = i
    } else if(dist < mindist) {
      mindist = dist
      mini = i
    }
  } 
  if(mini === undefined) return -1
  return mini
};