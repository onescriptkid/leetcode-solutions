/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let fast = nums[nums[0]]
  let slow = nums[0]
  while(fast !== slow) {
    fast = nums[nums[fast]]
    slow = nums[slow]
  }
  let slow2 = 0
  while(slow !== slow2) {
    slow = nums[slow]
    slow2 = nums[slow2]
  }

  return slow2
};