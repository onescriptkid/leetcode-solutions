/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

  function getBits(num) {
    let count = 0
    while(num > 0) {
      let bit = num % 2
      if(bit === 1) {
        count++
      }
      num = Math.floor(num / 2)
    }
    return count
  }

  let arr = []
  for(let i = 0; i <= n; i++) {
    let bits = getBits(i)
    arr.push(bits)
  }
  return arr
};