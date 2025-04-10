/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {

  //  7   0111
  //  12  1100
  //  9   1001
  let out = 0
  for(let i = 0; i < 32; i++) {

    let count = 0
    for(let num of nums) {
      let bit = (num >> i) & 1
      if(bit === 1) {
        count++
      }
    }
    if(count >= k) {
      out += 2 ** i
    }
  }
  return out
};