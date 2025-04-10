/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {

  function gcd(a,b) {
    if(b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }

  // prod === lcm * gcd
  // prod === lcm * 1

  let l = 0
  let r = 0
  let max = 2
  let prod = 1

  while(r < nums.length) {
    let nr = nums[r]
    r++

    while(gcd(prod, nr) !== 1) {
      let nl = nums[l]
      l++
      prod = prod / nl
    }
    prod = prod * nr

    let len = r -l
    if(len > max) {
      max = len
    }
  }
  return max

};