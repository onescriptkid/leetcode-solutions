/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {

  let mapa = new Map()   
  let mapb = new Map()
  let count = 0
  let out = []
  // {3: 1, }

  for(let i = 0; i < A.length; i++) {
    let a = A[i]
    let b = B[i]

    if(mapa.get(a) === undefined) {
      mapa.set(a, 1)
    } else {
      mapa.set(a, mapa.get(a) + 1)
    }

    if(mapb.get(b) === undefined) {
      mapb.set(b, 1)
    } else {
      mapb.set(b, mapb.get(b) + 1)
    }
    if(a === b) {
      count++ 
    } else {
      if(mapa.get(b)) {
        count++
      }
      if(mapb.get(a)) {
        count++
      }
    }
    out.push(count)
  }
  return out
};