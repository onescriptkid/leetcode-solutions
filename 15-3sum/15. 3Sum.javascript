/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  // -1 0 1 2 -1 -4
  //  i j         k   
  nums.sort((a,b) => a > b ? 1 : -1)

  let i = 0
  let out = []
  while(i < nums.length) {

    let j = i + 1
    let k = nums.length - 1
    while(j < k) {
      // console.log(i, j, k, '-', nums[i], nums[j], nums[k] )
      let sum = nums[i] + nums[j] + nums[k]
      if(sum === 0) {
        out.push([nums[i], nums[j], nums[k]])
        let prev = nums[j]
        while(prev === nums[j]) {
          j++
        }
      } else if(sum < 0) {
        j++
      } else {
        k--
      }
    }
    
    let prev = nums[i]
    while(prev === nums[i]) {
      i++
    } 
  }
  return out
};