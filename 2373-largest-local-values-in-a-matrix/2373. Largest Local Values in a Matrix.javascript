/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {


  let rows = grid.length
  let cols = grid[0].length
  let out = new Array(rows - 2).fill(0).map(v => new Array(cols - 2).fill(0))
  console.log(out)
  for(let r = 1; r < rows-1; r++) {
    for(let c = 1; c < cols-1; c++) {
      
      let val = getVal(r, c)
      // console.log('r c', r,c, 'val', val)
      out[r-1][c-1] = val
    }
  }   

  function getVal(r,c) {
    let vals = []
    vals.push(grid[r][c])
    vals.push(grid[r][c+1])
    vals.push(grid[r][c-1])

    vals.push(grid[r+1][c])
    vals.push(grid[r+1][c+1])
    vals.push(grid[r+1][c-1])

    vals.push(grid[r-1][c])
    vals.push(grid[r-1][c+1])
    vals.push(grid[r-1][c-1])

    return Math.max(...vals)  
  }
  return out
};