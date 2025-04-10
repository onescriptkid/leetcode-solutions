/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {

  nums.sort((a,b) => {
    if(a < b) {
      return 1
    } else {
      return -1
    }
  })

  // 9 7 4 1  k = 3
  //     k
  //     h l
  let min = nums[0] - nums[k - 1] 
  for(let i = 0; i <= nums.length - k; i++) {
    let diff = nums[i] - nums[k - 1 + i]
    // console.log(diff, nums[i], nums[k - 1 + i], i, k - 1 + i, nums.length - k)
    if(diff < min) {
      min = diff
    }
  }
  // console.log(nums, nums.length, nums.length - k)
  return min
};