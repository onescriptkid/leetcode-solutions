/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {


  //  0 1   1
  //  1 2   11
  //  2 3   121
  //  3 4   1331
  //  4 5   14641

  let pascal = [[1]]
  for(let i = 1; i < numRows; i++) {
    let row = []
    let prev = pascal[i-1]
    // console.log('i', i, 'row', row)
    for(let j = 0; j <= prev.length; j++) {
      let p0 = prev[j-1] || 0
      let p1 = prev[j] || 0
      let c = p0 + p1
      row.push(c)
    }
    pascal.push(row)
    // console.log('  row', row)
  }

  return pascal

};