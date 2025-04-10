/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let set = new Set(nums)
  if(set.has(0) && set.size === 1) return 0

  if(set.has(0)) {
    return set.size -1
  } else {
    return set.size
  }
};