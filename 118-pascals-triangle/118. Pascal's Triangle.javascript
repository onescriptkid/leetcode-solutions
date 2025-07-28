/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  // 01234

  // 1
  // 11
  // j

  // 121
  // 1331
  // 14641

  let pascal = [[1]]

  for(let i = 1; i < numRows; i++) {
    let prev = pascal[i-1]
    let row = []

    for(let j = 0; j <= prev.length;j++) {
      let p = prev[j-1] || 0
      let c = prev[j] || 0

      let val = p + c
      row.push(val)
    }
    pascal.push(row)

  }
  return pascal

};