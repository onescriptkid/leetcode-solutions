/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let rows = grid.length
  let cols = grid[0].length
  let fresh = 0
  let queue = []
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(grid[r][c] === 1) fresh++
      if(grid[r][c] === 2) queue.push([r,c])
    }
  }   

  if(fresh === 0) return 0

  let dirs = [[1,0],[-1,0], [0,1], [0,-1]]
  let min = 1
  while(queue.length > 0) {
    let length = queue.length

    for(let i = 0; i < length; i++) {
      let [r,c] = queue.shift()

      for(let [dx,dy] of dirs) {
        let rn = r + dx
        let cn = c + dy

        if(rn < 0 || rn >= rows || cn < 0 || cn >= cols) continue
        if(grid[rn][cn] !== 1) continue
        grid[rn][cn] = 2
        fresh--

        if(fresh === 0) return min

        queue.push([rn,cn])
      }
    }
    min++
  }

  return -1
};