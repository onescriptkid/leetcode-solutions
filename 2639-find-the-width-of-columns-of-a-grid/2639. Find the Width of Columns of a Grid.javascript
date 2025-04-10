/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {

  let arr = []
  let columns = grid[0].length
  for (let c = 0; c < columns; c++) {
      let max = undefined
    for (let r = 0; r < grid.length; r++) {
      let val = grid[r][c]
      if (max === undefined) {
        max = "" + val
      } else if (`${val}`.length > max.length) {
        max = "" + val
      }
    }
      arr.push(max.length)
  }
  return arr
};