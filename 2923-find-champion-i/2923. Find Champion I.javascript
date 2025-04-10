/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {

  for(let i = 0; i < grid.length; i++) {
    let total = 0
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === 1) total++
    }
    // console.log('i', i, 'total', total)
    if(total === (grid.length - 1) ) {
      return i
    }
  }   
};