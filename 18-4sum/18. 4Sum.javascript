/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // -2 -1 0 0 1 2
  //  i  j l     r

  nums.sort((a,b) =>  a > b ? 1 : -1)

  let out = []
  let i = 0
  while(i < nums.length) {

    let j = i + 1
    while(j < nums.length) {

      let l = j + 1
      let r = nums.length - 1
      while(l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r]
        if(sum === target) {
          out.push([nums[i], nums[j],nums[l], nums[r]])

          let prev = nums[l]
          while(prev === nums[l]) {
            l++
          }
        } else if(sum < target) {
          l++
        } else if(sum > target) {
          r--
        }
      }

      let prev = nums[j]
      while(prev === nums[j]) {
        j++
      }
    }
    let prev = nums[i]
    while(prev === nums[i]) {
      i++
    }
  }
  return out

};