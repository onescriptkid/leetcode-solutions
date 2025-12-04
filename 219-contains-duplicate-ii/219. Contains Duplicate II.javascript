/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = {}

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(map[num] !== undefined) {
      let diff = i - map[num]
      if(diff <= k) return true
    }
    map[num] = i
  }

  return false

};