/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {

  let arr = []
  for(let i = 0; i < rows;i++) {
    for(let j = 0; j < cols; j++) {
      arr.push([i,j])
    }
  }

  arr.sort((a,b) => {
    let adist = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter)
    let bdist = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter)
    if(adist > bdist) {
      return 1
    }
    return -1


  })
  return arr
};