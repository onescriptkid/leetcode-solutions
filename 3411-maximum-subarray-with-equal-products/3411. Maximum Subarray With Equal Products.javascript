/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
  // 10 15 20 => gcd(...) => 5
  // 10 15 20 => lcm(...) => 60

  // 1 2 1 2 1 1 1
  //     1 2 1 1 1 => gcd = 1, lcm=2, prod=2

  function gcd(a,b) {
    if(b === 0) {
      return a
    } else {
      return gcd(b, a%b)
    }
  }

  let l = 0
  let r = 0
  let max = 2
  let prod = 1

  while(r < nums.length) {
    let nr = nums[r]
    r++

    while(gcd(prod, nr) !== 1) {
      let nl = nums[l]
      prod = prod / nl
      l++
    }

    prod = prod * nr
    let len = r - l
    if(len > max) {
      max = len
    }
  }
  return max
};