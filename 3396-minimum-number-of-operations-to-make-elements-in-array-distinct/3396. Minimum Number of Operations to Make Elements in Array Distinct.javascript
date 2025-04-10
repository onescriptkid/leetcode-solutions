/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {

  let set = new Set(nums)

  // 1 2 3 4 2 3 3 5 7  
  // 1 2 3 4 5 7
  let ops = 0
  while(nums.length > 0 && set.size !== nums.length) {
    ops++
    nums.shift()
    nums.shift()
    nums.shift()
    set = new Set(nums)
  }
  return ops
};