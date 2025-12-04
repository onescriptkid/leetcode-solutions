/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let mindiff
  let out

  nums.sort((a,b) => a > b ? 1 : -1)   
  let i = 0
  while(i <nums.length) {
    let l = i + 1
    let r = nums.length - 1

    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if(sum === target) return sum

      let diff = Math.abs(target - sum)
      if(mindiff === undefined || diff < mindiff) {
        mindiff = diff
        out = sum
      }

      if(sum < target) {
        l++
      } else {
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