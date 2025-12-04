/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  let rows = mat.length
  let cols = mat[0].length
  let queue = []
  let out = new Array(rows).fill(0).map(v => new Array(cols).fill(Infinity))   

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(mat[r][c] === 0) {
        out[r][c] = 0
        queue.push([r,c])
      }
    }
  }

  let level = 1
  let dirs = [[1,0],[-1,0],[0,1],[0,-1]]
  while(queue.length > 0) {
    let length = queue.length
    for(let i = 0; i < length; i++) {
      let [r, c] = queue.shift()

      for(let [dx, dy] of dirs) {
        let rn = r + dx
        let cn = c + dy
        if(rn < 0 || rn >= rows || cn < 0 || cn >= cols) continue

        if(out[rn][cn] <= level) continue
        out[rn][cn] = level
        queue.push([rn, cn])
      }
    }
    level++
  }
  return out
};