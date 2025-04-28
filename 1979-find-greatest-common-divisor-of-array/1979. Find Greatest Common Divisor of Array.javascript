/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

  let min
  let max
  for(let num of nums) {
    if(min === undefined) {
      min = num
    } else if(num < min) {
      min = num
    }
    if(max === undefined) {
      max = num
    } else if(num > max) {
      max = num
    }
  }

  function gcd(a,b) {
    if(b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }

  return gcd(min, max)

};