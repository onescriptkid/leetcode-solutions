/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  let rows = grid.length
  let cols = grid[0].length   

  let dist = new Array(rows).fill(0).map(v => new Array(cols).fill(Infinity))
  dist[0][0] = grid[0][0]

  let minheap = new PriorityQueue((a,b) => a[0] > b[0] ? 1 : -1)
  minheap.push([dist[0][0], 0, 0])

  let dirs = [[1,0],[-1,0],[0,1],[0,-1]]

  while(minheap.size() > 0) {
    let [d, r, c] = minheap.pop()

    if(r === rows - 1 && c === cols - 1) {
      return d
    }

    for(let [dx,dy] of dirs) {
      let rn = r + dx
      let cn = c + dy
      if(rn < 0 || rn >= rows || cn < 0 || cn >= cols) continue
      let max = Math.max(d, grid[rn][cn])
      if(dist[rn][cn] <= max) continue
      dist[rn][cn] = max
      minheap.push([dist[rn][cn], rn, cn])
    }
  }
};