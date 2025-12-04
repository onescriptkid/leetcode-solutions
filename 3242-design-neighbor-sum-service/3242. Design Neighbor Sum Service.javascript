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

  let rows = this.grid.length
  let cols = this.grid[0].length
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(this.grid[r][c] === value) {
        let sum = 0
        if(this.grid[r-1] !== undefined && this.grid[r-1][c] !== undefined) {
          sum+=this.grid[r-1][c]
        }
        if(this.grid[r+1] !== undefined && this.grid[r+1][c] !== undefined) {
          sum+=this.grid[r+1][c]
        }
        if(this.grid[r][c-1] !== undefined) {
          sum+=this.grid[r][c-1]
        }
        if(this.grid[r][c+1] !== undefined) {
          sum+=this.grid[r][c+1]
        }
        return sum
      }
    }
  }
  return -1

};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function(value) {

  let rows = this.grid.length
  let cols = this.grid[0].length
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(this.grid[r][c] === value) {
        let sum = 0
        if(this.grid?.[r-1]?.[c-1] !== undefined) {
          sum+=this.grid[r-1][c-1]
        }
        if(this.grid?.[r+1]?.[c-1] !== undefined) {
          sum+=this.grid[r+1][c-1]
        }
        if(this.grid?.[r+1]?.[c+1] !== undefined) {
          sum+=this.grid[r+1][c+1]
        }
        if(this.grid?.[r-1]?.[c+1] !== undefined) {
          sum+=this.grid[r-1][c+1]
        }
        return sum
      }
    }
  }
  return -1
 

};

/** 
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */