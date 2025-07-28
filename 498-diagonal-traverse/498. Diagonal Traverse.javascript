/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  let map = {}
  let rows = mat.length
  let cols = mat[0].length

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(map[r+c] === undefined) {
        map[r+c] = [mat[r][c]]
      } else {
        map[r+c].push(mat[r][c])
      }
    }
  }
  let out = []
  for(let key of Object.keys(map)) {
    if(Number(key) % 2 === 0) {

      // map[key].reverse()
      for(let i = 0; i < map[key].length >> 1; i++) {
        let tmp = map[key][i]
        map[key][i] = map[key][map[key].length - 1 - i]
        map[key][map[key].length - 1 - i] = tmp
      }
    }
    for(let i = 0; i < map[key].length; i++) {
      out.push(map[key][i])
    }
  }
  return out
};