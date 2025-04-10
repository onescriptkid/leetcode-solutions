/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let set = new Set(nums)
  for(let num of nums) {
    if(num < k) {
      return -1
    }
  }


  if(set.has(k)) {
    return set.size - 1
  }
  return set.size
};