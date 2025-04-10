/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {

  // 2 2
  // 4 0  
  // 1 2 2 1 1 0
  // 
  // 1 4 0 2 0 0
  //        
  for(let i = 0; i < nums.length - 1; i++) {
    let c = nums[i]
    let n = nums[i+1]
    if(c === n) {
      nums[i] = nums[i]*2
      nums[i+1] = 0
    }
  }

  // z=1
  // 1 4 0 1 1 0
  //       c
  let z = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(z !== 0) {
      nums[i-z] = nums[i]
      nums[i] = 0
    }
    if(num === 0) z++
  }
  // let l = 0
  // let r = nums.length - 1

  // while(l < r) {
  //   let left = nums[l] 
  //   let right = nums[r]
  //   while(nums[l] !== 0 && l < r) {
  //     l++
  //   }
  //   while(nums[r] === 0 && l < r) {
  //     r--
  //   }
  //   if(nums[r] === undefined || nums[l] === undefined) break;
  //   if(nums[l] === 0 && nums[r] !== 0) {
  //     let tmp = nums[l]
  //     nums[l] = nums[r]
  //     nums[r] = tmp
  //   }
  // }
  return nums
  // 1 4 0 2 0 0
  //     l r

};