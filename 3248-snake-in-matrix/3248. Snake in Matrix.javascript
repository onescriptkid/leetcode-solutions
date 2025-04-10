/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
  let grid = []
  for(let r = 0; r < n; r++) {
    let row = []
    for(let c = 0; c < n; c++) {
      row.push((r * n) + c)
    }
    grid.push(row)
  }
  // console.log(grid)
  let r = 0
  let c = 0
  for(let command of commands) {
    if(command === "RIGHT") {
      c++
    }
    if(command === "LEFT") {
      c--
    }
    if(command === "UP") {
      r--
    }
    if(command === 'DOWN') {
      r++
    }
  }
  return grid[r][c]

};