/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    
  // 1 0 0 0 1 
  // 1 0 0 0 1 
  // 1 1 0 1 1 
  // 1 0 0 0 1 
  // 1 0 0 0 1 
  let rows = grid.length
  let cols = grid[0].length
  let islandMap = {}
  let size = 0

  let island = 2
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        bt(r,c)
        islandMap[island] = size
        island++
        size = 0
      }
    }
  }
  // console.log(grid)
  // console.log(islandMap) // {4: 1}
  function bt(r,c) {
    // console.log('r c', r,c)
    if(r < 0 || r >= rows || c < 0 || c >= cols) return
    if(grid[r][c] !== 1) return
    grid[r][c] = island
    size++
    bt(r, c+1)
    bt(r, c-1)
    bt(r-1, c)
    bt(r+1, c)
  }

  let max = 1
  for(let key in islandMap) {
    let isize = islandMap[key]
    max = Math.max(isize)
  }
  // console.log('part 2')
  for(let r = 0; r < rows; r++) {
    for(let c= 0; c < cols; c++) {
      if(grid[r][c] === 0) {
        let islands = new Set()
        let opt1 = peek(r,c+1)
        let opt2 = peek(r,c-1)
        let opt3 = peek(r-1,c)
        let opt4 = peek(r+1,c)
        islands.add(opt1)
        islands.add(opt2)
        islands.add(opt3)
        islands.add(opt4)

        let total = 1
        for(let island of islands) {
          if(island ===0) continue
          total+=islandMap[island] 
        }
        // console.log('grid[r][c]', grid[r][c], 'r,c', r,c, '-', total)
        max=Math.max(max, total)
      }
    }
  }  

  function peek(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return 0
    return grid[r][c]
  }

  // 1 0 5 0 1 
  // 1 0 5 0 1 
  // 1 1 0 1 1 
  // 1 0 4 0 1 
  // 1 0 4 0 1 

  return max
};