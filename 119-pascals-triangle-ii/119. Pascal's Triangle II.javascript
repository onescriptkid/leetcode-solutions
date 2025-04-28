/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

  // 0  1
  // 1  11
  // 2  121
  // 3  1331
  // 4  14641

  let pascal = [[1]]

  for(let i = 0; i < rowIndex; i++) {
    let prev = pascal[i]
    let row = []
    for(let j = 0; j <= prev.length; j++) {
      let p0 = prev[j -1] || 0
      let p1 = prev[j] || 0
      let c = p0 + p1
      row.push(c)
    //  121
    // ab 
    //  1331
    }
    pascal.push(row)
  }
  return pascal[rowIndex]

};