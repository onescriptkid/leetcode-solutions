/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  //    0 1 2 3 4 
  // 1 [1]
  // 2 [1,1]
  // 3 [1,2,1]
  // 4 [1,3,3,1]
  // 5 [1,4,6,4,1]

  let out = [[1]]

  for(let i = 1; i < numRows; i++) {
    let prev = out[i-1]
    let curr = []
    for(let j = 0; j < i+1; j++) {  // i=1,  row(2) => [1,1]
      let left = prev[j-1] ?? 0
      let right = prev[j] ?? 0
      curr.push(left+ right)
    }
    out.push(curr)
  }

  return out


};