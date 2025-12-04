/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a,b) => a > b ? 1 : -1)   

  let i = 0
  let out = []
  while(i < nums.length) {
    let l = i + 1
    let r = nums.length - 1
    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r]

      if(sum === 0) {
        out.push([nums[i], nums[l], nums[r]])

        let prev = nums[l]
        while(prev === nums[l]) {
          l++
        }
      } else if(sum < 0) {
        l++
      } else if(sum > 0) {
        r--
      }
    }

    let prev = nums[i]
    while(prev === nums[i]) {
      i++
    }
  }  
  return out
};