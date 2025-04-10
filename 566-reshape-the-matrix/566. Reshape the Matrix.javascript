/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {

  // illegal   
  let rc = r * c
  let mn = mat.length * mat[0].length
  if(rc !== mn) {
    return mat
  }

  // legal
  let out = []
  // for(let i = 0; i < r; i++) {
  //   let arr = []
  //   for(let j = 0; j < c; j++) {
  //     arr.push(0)
  //   }
  //   out.push(arr)
  // }
  // let out = new Array(r).fill(new Array(c).fill(0))
  // [ 
  //   [0,0,0],
  //   [0,0,0],
  //   [0,0,0],
  // ]
  let ri = 0;
  let ci = 0;
  console.log(out)
  for(let i = 0; i< mat.length; i++) {
    let row = mat[i]

    for(let j = 0; j < row.length; j++) {
      let val = row[j]
      if(out[ri] === undefined) {
        out[ri] = []
      }
      out[ri][ci] = val
      // console.log(val, ri, ci, out)

      ci++
      if(ci === c) {
        ci = 0
        ri++
      } 

        // ri++
        // ci++
    }

  }
  return out
};