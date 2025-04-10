/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {

  //  8421
  // 10001
  //     p
  let max = 0
  let prev = false
  let count = 0
  while(n > 0) {
    let bit = n % 2
    // console.log('bit', bit, 'n', n.toString(2), 'count', count)
    if(bit === 1) {
      if(prev) {
        let gap = count
        if(gap > max) {
          max = gap
        }
      }

      prev = true
      count = 0
    }
    count++
    n = Math.floor(n / 2)
  }
  return max
    
};