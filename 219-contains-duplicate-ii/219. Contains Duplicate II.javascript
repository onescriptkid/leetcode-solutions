/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

  // 1 2 3 1 
  // 0 1 2 3
  // i     j

  // 1 2 3 1 2 3
  // 0 1 2 3 4 5
  // i     j

  let hash = {}
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(hash[num] !== undefined) {
      let prev = hash[num]
      let diff = i - prev
      if(diff <= k) {
        return true
      }
    }
    hash[num] = i
  }
  return false

};