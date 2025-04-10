/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

  //  4  3  2 -1
  //  3  2  1 -1
  //  1  1 -1 -2 
  // -1 -1 -2 -3 
  // Count all m * n

  let r = grid.length - 1
  let c = 0
  let count = 0
  while(grid[r] !== undefined && grid[r][c] !== undefined) {
    let val = grid[r][c]
    if(val < 0) {
      count+=(grid[r].length - c)
    }

    if(val < 0) {
      r--
    } else {
      c++
    }
  }
  return count
};