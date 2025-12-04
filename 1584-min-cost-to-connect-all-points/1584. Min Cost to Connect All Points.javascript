/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  let dist = []
  for(let i = 0; i < points.length; i++) {
    dist[i] = Infinity
  }   
  dist[0] = 0

  let next = 0
  let visited = new Set()
  let res = 0
  for(let i = 1; i < points.length; i++) {
    let mini
    visited.add(next)
    let [x,y] = points[next]
    for(let j = 1; j < points.length; j++) {
      if(visited.has(j)) continue
      let [x2,y2] = points[j]

      let d = Math.abs(x - x2) + Math.abs(y - y2)
      dist[j] = Math.min(d, dist[j]) 
      if(mini === undefined || dist[j] < dist[mini]) {
        mini = j
      }
    }
    res+=dist[mini]
    next = mini
  }
  return res
};