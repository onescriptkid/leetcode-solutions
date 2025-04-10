/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {

  let lsum = 0
  let lsums = [0]

  for(let i = 0; i < nums.length -1; i++) {
    lsum+=nums[i]
    lsums.push(lsum)
  }


  let rsum = 0
  let rsums = [0]
  for(let i = 0; i < nums.length - 1; i++) {
    rsum+=nums[nums.length - 1 -i]
    rsums.unshift(rsum)
  }
  console.log(rsums)
  console.log(lsums)
  // 2  3 -1  8  4 
  // 0  2  5  4  12
  // 14 11 12 4  0

  for(let i = 0; i < nums.length; i++) {
    if(rsums[i] === lsums[i]) {
      return i
    }
  }
  return -1
};