/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

  let rows = matrix.length
  let cols = matrix[0].length
  for(let r = 0; r< rows; r++) {
    for(let c = 0; c < cols >> 1; c++) {
      let tmp = matrix[r][c]
      matrix[r][c] = matrix[r][cols - 1 - c]
      matrix[r][cols - 1 - c] = tmp
    }
  }
  // console.log(matrix)
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols-r; c++) {
      let tmp = matrix[r][c]
      matrix[r][c] = matrix[rows - 1 - c][cols- 1 -r]
      matrix[rows-1-c][cols-1-r] = tmp
    }
  }


  // 1 2 3 
  // 4 5 6
  // 7 8 9   

  // 3 2 1
  // 6 5 4
  // 9 8 7   

  // 7 4 1    - - x
  // 8 5 2    - x -
  // 9 6 3    x - -
};