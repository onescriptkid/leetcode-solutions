/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  //  1
  //  11
  //  121
  //  1331
  //  j
  //  14641
  //  

  let out = [[1]]
  for(let i = 1; i < numRows; i++) {
    let prev = out[i-1]

    let row = []
    for(let j = 0; j < prev.length+1; j++) {
      let p = prev[j-1]
      let c = prev[j]
      if(p === undefined || c === undefined) {
        row.push(1)
      } else {
        row.push(p+c)
      }
    }

    out.push(row) 
  }
  return out

};