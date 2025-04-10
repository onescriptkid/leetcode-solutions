/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {

  let mati = mat.map((v, k) => {
    return [v, k]
  })   


  // [0, mat], [1, mat], [2,mat]

  mati.sort((a,b) => {

    let ma = a[0]
    let asol = 0
    ma.forEach(p => p === 1 && asol++)
    
    let mb = b[0]
    let bsol = 0
    mb.forEach(p => p === 1 && bsol++)
    // console.log('a[0]',a[0], 'b[0]', b[0], 'asol', asol, 'bsol', bsol )

    if(asol > bsol) {
      return 1
    } else if(asol < bsol) {
      return -1 
    } else {
      if(a[1] < b[1]) {
        return -1
      } else {
        return 1
      }
    }
  })

  let out = []
  for(let [v, k] of mati) {
    out.push(k)
  }

  return out.slice(0, k)
};