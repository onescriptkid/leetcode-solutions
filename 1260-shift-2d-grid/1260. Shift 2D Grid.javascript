/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {

  function shift() {

    let rows = grid.length
    let cols = grid[0].length

    // let br = grid[rows][cols]

    // 1 2 3
    // 4 5 6
    // 7 8 9
    
    //   1 2 3
    // 4 5 6
    // 7 8 9

    let br = grid[rows-1][cols-1]
    for (let r = rows - 1; r >= 0; r--) {

      let prev
      if(r === 0) {
        prev = br
      }  else {
        prev = grid[r-1][cols-1]
      }
      let first = grid[r][0]
      for (let c = cols - 1; c >= 0; c--) {
        if(c !== 0) {
          grid[r][c] = grid[r][c-1]
        } else {
          grid[r][c] = prev
        }
      }
    }
    // console.log(grid)
  }
  // shift()

  for(let i = 0; i< k; i++) {
    shift()
  }
  return grid


};