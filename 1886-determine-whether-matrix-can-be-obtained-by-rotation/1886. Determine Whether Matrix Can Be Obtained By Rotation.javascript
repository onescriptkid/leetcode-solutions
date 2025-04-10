/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {

  function rotate(matrix) {

    for(let r = 0; r < matrix.length; r++) {
      for(let c = 0;  c < matrix[r].length >> 1; c++) {
        let tmp = matrix[r][c]
        matrix[r][c] = matrix[r][matrix[r].length - 1 - c]
        matrix[r][matrix[r].length - 1 -c] = tmp
      }
    }
    // console.log(' reve', matrix)

    for(let r = 0; r < matrix.length; r++) {
      for(let c = r; c < matrix[r].length; c++) {
        let tmp = matrix[r][c]
        matrix[r][c] = matrix[c][r]
        matrix[c][r] = tmp
      }
    }
    // console.log(' diag', matrix)

    return matrix
  }

  // console.log('mat', mat) 
  // console.log('target', target) 
  // console.log('rotate', rotate(mat))

  // return false

  for(let i = 0; i < 4; i++) {

    let rotated = rotate(mat)
    let allEqual = true
    for(let r = 0; r < mat.length; r++) {
      for(let c = 0; c < mat[r].length; c++) {
        if(target[r][c] !== mat[r][c]) {
          // console.log('r', r, 'c', c, 'target', target[r][c], 'mat', mat[r][c])
          allEqual = false
          break;
        }
      }
    }


    if(allEqual) {
      return true
    }
  }

  return false
};