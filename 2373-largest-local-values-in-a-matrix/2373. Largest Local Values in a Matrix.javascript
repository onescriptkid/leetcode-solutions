/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {

  let out = new Array(grid.length-2).fill(0).map(v => new Array(grid.length-2).fill(0))

  console.log(out)

  // 00 01
  // 10 11

  // 00 01 02 03
  // 10 11 12 13
  // 20 21 22 23
  // 30 31 32 33

  for(let i = 0; i< out.length; i++) {
    for(let j = 0; j < out[i].length;j++) {
      // console.log(i,j)

      let max = undefined
      for(let r = i; r < i+3; r++) {
        for(let c = j; c < j+3; c++) {
          let val = grid[r][c]

          if(max === undefined) {
            max = val
          } else if(val > max) {
            max = val
          }
        }
      }
      out[i][j]= max

    }
  }  
  return out
};