/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {


  let lsums = []
  let lsum = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    lsum+=num
    lsums.push(lsum)
  }

  let rsums = []
  let rsum = 0
  for(let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i]
    rsum+=num
    rsums.unshift(rsum)
  }
  // console.log(lsums)
  // console.log(rsums)
  // 1  7  3  6  5  6
  // 0  1  8  11 17 22
  // 27 20 17 11 6   0

  // 1  8  11 17 22 28 
  // 28 27 20 17 11 6

  for(let i = 0; i <nums.length; i++) {

    let left = lsums[i-1] || 0
    let right = rsums[i+1] || 0
    if(left === right) {
      return i
    }
  }
  return -1

};