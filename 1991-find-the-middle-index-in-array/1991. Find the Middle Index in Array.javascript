/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {

  //  2  3 -1  8  4
  //  0  2  5  4  12
  // 14  11 12  4  0

  let lsums = []
  let leftsum = 0
  for(let num of nums) {
    lsums.push(leftsum)
    leftsum+=num
  }

  let rsums = new Array(nums.length).fill(0)
  let rightsum =0
  for(let i = nums.length - 1; i >= 0; i--) {
    rsums[i] = rightsum
    rightsum+= nums[i]
  }
  // console.log('lsums', lsums)
  // console.log('rsums', rsums)

  for(let i = 0; i < nums.length; i++) {
    let left = lsums[i]
    let right = rsums[i]
    if(left === right) {
      return i
    }

  }
  return -1

};