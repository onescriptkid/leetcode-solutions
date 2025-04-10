/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  // arr = 1,0,2,1
  //       i j

  // enc = 1^0, 0^2, 2^1
  //       1  , 2  , 3
  // 10
  // 01
  let curr = first
  let arr = [first]
  for(let i = 0; i < encoded.length; i++) {
    let e = encoded[i]

    let xor = curr ^ e

    arr.push(xor)
    curr = xor
  }
  return arr

};