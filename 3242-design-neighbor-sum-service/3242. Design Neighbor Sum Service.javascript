/**
 * @param {number[][]} grid
 */
var NeighborSum = function(grid) {
  this.grid = grid
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function(value) {
  let sum = 0
  let grid = this.grid
  for(let r = 0; r < this.grid.length; r++) {
    for(let c = 0; c < this.grid[r].length; c++) {
      if(grid[r][c] === value) {
        let up = grid[r-1]?.[c] || 0
        let down = grid[r+1]?.[c] || 0
        let left = grid[r][c-1] || 0
        let right = grid[r][c+1] || 0
        sum+=(up+down+left+right)
        break
      }
    }
  }
  return sum
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function(value) {
    
  let sum = 0
  let grid = this.grid
  for(let r = 0; r < this.grid.length; r++) {
    for(let c = 0; c < this.grid[r].length; c++) {
      if(grid[r][c] === value) {
        let uleft = this.grid[r-1]?.[c-1] || 0
        let uright= this.grid[r-1]?.[c+1] || 0
        let dleft = this.grid[r+1]?.[c-1] || 0
        let dright = this.grid[r+1]?.[c+1] || 0
        sum+=(uleft+uright + dleft + dright)
        break
      }
    }
  }
  return sum

};

/** 
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */