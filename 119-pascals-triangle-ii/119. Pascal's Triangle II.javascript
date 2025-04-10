/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

  //   0   1
  //   1   11
  //   2   121 

  //   3   1331
  let pascal = [[1]]
  if(rowIndex === 0) return pascal[0]

  for(let i = 1; i <= rowIndex; i++) {
    let prevrow = pascal[i - 1]
    let row = []
    for(let j = 0; j < prevrow.length+1; j++) {
      let left = prevrow[j-1] || 0
      let right = prevrow[j] || 0

      row.push(left+right)
    }
    pascal.push(row)
  }
  return pascal[rowIndex]
};