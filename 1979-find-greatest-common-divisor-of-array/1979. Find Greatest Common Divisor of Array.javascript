/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  // gcd(a,b,c) = gcd(a, gcd(b,c))

  let min = Math.min(...nums)
  let max = Math.max(...nums)

  function getGcd(a,b) {
    if(b === 0) {
      return a
    } else {
      return getGcd(b, a % b)
    }
  } 
  return getGcd(min, max)
};