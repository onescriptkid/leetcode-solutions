/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let rows = grid.length
  let cols = grid[0].length

  let queue = []
  let rotten = 0
  let total = 0
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(grid[r][c] === 2) {
        queue.push([r,c])
        rotten++
        total++
      }
      if(grid[r][c] === 1) {
        total++
      }
    }
  }   

  if(rotten === total) return 0

  let minute = 1
  let dirs = [[1,0],[-1,0],[0,1],[0,-1]]

  while(queue.length > 0) {
    let length = queue.length
    for(let i = 0; i < length; i++) {
      let [r, c] = queue.shift()
      
      for(let [dx, dy] of dirs) {
        let rn = r + dx
        let cn = c + dy
        if(rn < 0 || rn >= rows || cn < 0 || cn >= cols) continue
        if(grid[rn][cn] !== 1) continue
        grid[rn][cn] = 2
        rotten++
        if(total === rotten) return minute
        queue.push([rn, cn])
      }
    }
    minute++
  }
  return -1
};