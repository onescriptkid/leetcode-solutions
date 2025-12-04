/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let max = 1
  for(let [x,y] of points) {
    let map = new Map()

    for(let [x2,y2] of points) {
      if(x === x2 && y === y2) continue

      let dy = y2 - y
      let dx = x2 - x

      let slope = dy / dx

      if(slope === -Infinity) slope = Infinity  

      map.set(slope, (map.get(slope) || 1) + 1  )
      max = Math.max(max, map.get(slope))
    }
  }

  return max
};