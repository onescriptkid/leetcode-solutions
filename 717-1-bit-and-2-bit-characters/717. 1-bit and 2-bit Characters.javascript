/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  // 1 0 0  10->0
  // 
  // 1 1 1 0 11->10

  // 0 1 0

  let i = 0
  while (i < bits.length) {
    // console.log('bits', bits.slice(i))
    let f = bits[i]
    let s = bits[i+1]
    if(i === bits.length - 1) {
      return true
    }

    if(bits[i] === 1) {
      i+=2
    } else {
      i+=1
    }
  }
  return false
};