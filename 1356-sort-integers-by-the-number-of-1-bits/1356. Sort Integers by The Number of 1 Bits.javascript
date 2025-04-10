/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

  arr = arr.sort((a,b) => {
    let abits = countBits(a)
    let bbits = countBits(b)
    if(abits === bbits) {
      if(a > b) {
        return 1
      } else {
        return -1
      }
    } else if(abits > bbits) {
      return 1
    } else {
      return -1
    }
  })

  function countBits(n) {

    let bits = 0
    while(n > 0) {
      let bit = n % 2
      if(bit === 1) {
        bits+=1
      }
      n = Math.floor(n / 2)
    }
    return bits

  }
  return arr
};