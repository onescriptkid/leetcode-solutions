/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 
  let visited = []
  for(let r = 0; r < grid.length; r++) {
    let row = []
    for(let c = 0; c < grid[r].length; c++) {
      row.push(0)
    }
    visited.push(row)
  }   
  // console.log(visited)

  let count = 0
  for(let r = 0; r < grid.length; r++) {
    for(let c = 0; c < grid[r].length; c++) {
      // console.log(r, c, grid[r][c] ===1)
      if(visited[r][c] === 1) {
        continue
      }
      if(grid[r][c] === "1") {
        count++
        visit(r,c)
      }
    }
  }

  function visit(r, c) {
    // console.log('  visit', r,c)
    if(visited[r] === undefined) {
      return
    }
    if(visited[r][c] === undefined) {
      return
    }
    if(grid[r][c] === "0") {
      return
    }
    if(visited[r][c] === 1) {
      return 
    }

    visited[r][c] = 1
    visit(r+1,c)
    visit(r-1,c)
    visit(r,c+1)
    visit(r,c-1)
  }
  return count
};
