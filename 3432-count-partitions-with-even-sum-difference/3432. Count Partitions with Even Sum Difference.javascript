/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {

  // 10 10  3  7  6   
  // 10 20 23 30 36
  // 36 26 16 13 6

  let leftsums = []
  let leftsum = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    leftsum+=num
    leftsums.push(leftsum)
  }

  let rightsums = []
  let rightsum = 0
  for(let i = nums.length -1; i >= 0; i--) {
    let num = nums[i]
    rightsum += num
    rightsums.unshift(rightsum)
  }
  let count = 0
  for(let i = 0; i < nums.length -1; i++) {
    let left = leftsums[i]
    let right = rightsums[i+1]
    if(Math.abs(left - right) % 2 === 0) {
      count++
    }
  }
  return count
};