/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {

  // https://leetcode.com/problems/partition-array-according-to-given-pivot/?envType=problem-list-v2&envId=2scrurcj
  // 9 12 5 10 14 3 10
  //      i
  //   j
  // 9 5 12 10 14 3 10
  //      i
  //   j
  // 9 5 12 10 14 3 10
  //      i
  //      j
  
  // 9 5 12 10 14 3 10
  //        i
  //      j
  // 9 5 10 12 14 3 10
  //        i
  //      j
  // 9 5 10 12 14 3 10
  //        i
  //        j
  
  // 9 5 10 12 14 3 10
  //              i
  //        j

  // 9 12 5 10 14 3 10
  //   i           
  //           j
  //              k
  
  let pi = 0
  for(let i = 0; i < nums.length; i++) {
    console.log(nums.join(','))
    if(nums[i] <= pivot) {
      let tmp = nums[pi]
      nums[pi] = nums[i]
      nums[i] = tmp
      pi++
    }
  }   
  console.log('end', nums)

  pi = nums.length - 1
  for(let i = nums.length - 1; i >= 0; i--) {
    console.log(nums.join(','))
    if(nums[i] >= pivot) {
      let tmp = nums[pi]
      nums[pi] = nums[i]
      nums[i] = tmp
      pi--
    }
  }   
  console.log('end', nums)
  return nums
};