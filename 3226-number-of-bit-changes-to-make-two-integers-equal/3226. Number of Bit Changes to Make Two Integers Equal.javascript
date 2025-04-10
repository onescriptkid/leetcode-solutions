/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
  // 8421
  // 1101  n = 13
  //  100  k = 4
  let count = 0
  while(n > 0 || k > 0) {
    let dn = n & 1
    let dk = k & 1

    if(dn === 1 && dk === 0) {
      count++
    } else if(dn === 0 && dk === 1) {
      return -1
    }
    n = n >> 1
    k = k >> 1
  }
  return count
};