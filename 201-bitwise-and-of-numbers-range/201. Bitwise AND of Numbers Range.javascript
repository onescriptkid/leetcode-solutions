/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
  // 111
  // 101
    
  let i = 0
  while(left !== right) {
    left = left >> 1
    right = right >> 1
    i++
  }
  return left << i
};