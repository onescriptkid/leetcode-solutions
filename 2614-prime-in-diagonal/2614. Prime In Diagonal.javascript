/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {

  function isPrime(n) {
    if(n === 1) return false
    if(n === 2) return true
    for(let i = 2; i <= Math.sqrt(n); i++) {
      if(n % i === 0) {
        return false
      }
    }
    return true
  }

  //
  let max
  for(let i = 0; i < nums.length; i++) {
      let val1 = nums[i][i]
      let val2 = nums[i][nums.length - 1 - i]
      if(isPrime(val1)) {
        if(max === undefined) {
          max = val1
        } else if(val1 > max) {
          max = val1
        }
      }
      if(isPrime(val2)) {
        if(max === undefined) {
          max = val2
        } else if(val2 > max) {
          max = val2
        }
      }
  } 
  return max || 0
};