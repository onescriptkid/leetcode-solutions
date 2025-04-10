/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const result = new Array(n * 2)
  let j = 0
  for(let i = 0; i < n; i++) {
    result[j++] = nums[i]
    result[j++] = nums[i+n]
  }
  return result

};