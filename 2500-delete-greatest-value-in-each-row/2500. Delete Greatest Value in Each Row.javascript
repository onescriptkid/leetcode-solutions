/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
  let k = 0
  let length = grid[0].length
  let out = 0
  while(k < length) {
    let allmax;
    for(let i = 0; i < grid.length; i++) {
      let rowmax = undefined
      let index = undefined
      for(let j = 0; j < grid[i].length; j++) {
        let val = grid[i][j]

        if(allmax === undefined) {
          allmax = val
        } else if(allmax < val) {
          allmax = val
        }

        if(rowmax === undefined) {
          rowmax = val
          index = j
        } else if(rowmax < val) {
          rowmax = val
          index = j
        }
      }
      grid[i].splice(index, 1)
    }
    // console.log(allmax, grid)
    out+=allmax
    k++
  }    
  return out
};