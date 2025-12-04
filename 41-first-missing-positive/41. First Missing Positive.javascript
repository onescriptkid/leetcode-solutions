/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // remove negs and zero 
  let n = nums.length + 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) nums[i] = n
  }

  // mark negs
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let abs = Math.abs(num)

    if(abs > nums.length) continue

    nums[abs-1] = -Math.abs(nums[abs-1])
  }

  // find first missing pos
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) return i + 1
  }
  return n
};