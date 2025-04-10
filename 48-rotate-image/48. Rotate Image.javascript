/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

  // 1 2 3
  // 4 5 6
  // 7 8 9

  for(let r = 0; r < matrix.length; r++) {
    for(let c = 0; c < matrix[r].length >> 1; c++) {
      let tmp = matrix[r][c]
      matrix[r][c] = matrix[r][matrix[r].length -1 -c]
      matrix[r][matrix[r].length - 1 - c] = tmp
    }
  }
  // console.log(matrix)
  // 3 2 1
  // 6 5 4
  // 9 8 7

  //   0 1 2
  // 0 3 2 1
  // 1 6 5 4
  // 2 9 8 7
  for(let r = 0; r < matrix.length; r++) {
    for(let c = 0; c < matrix[r].length - r; c++) {
      // console.log(r, c, matrix[r][c], matrix[matrix.length - 1 - c  ][matrix[r].length - 1 - r])
      let tmp = matrix[r][c]
      matrix[r][c] = matrix[matrix.length - 1 - c  ][matrix[r].length - 1 - r]
      matrix[matrix.length - 1 - c][matrix[r].length - 1 - r] = tmp
    }
  }
  return matrix
  // 7 4 1
  // 8 5 2
  // 9 6 3

  // 7 8 1
  // 4 5 6
  // 9 2 3

};