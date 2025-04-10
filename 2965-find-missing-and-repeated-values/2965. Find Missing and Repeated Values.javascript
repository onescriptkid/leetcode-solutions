/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {

  let count = 1
  let bmap = {}
  grid.forEach(row => row.forEach(col => {
    bmap[count] = 1
    count++
  }))

  let out = []
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid.length; j++) {
      let val = grid[i][j]
      if(bmap[val] === 0) {
        out.push(val)
      }
      bmap[val]--
    }
  }

  let keys = Object.keys(bmap)
  for(let key of keys) {
    let count = bmap[key]
    if(count === 1) {
      out.push(Number(key))
    }
  }
  return out
};