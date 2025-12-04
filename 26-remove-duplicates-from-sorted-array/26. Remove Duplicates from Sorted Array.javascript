/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {


  // 0 0 1 1 1 2 2 3 3 4
  // i
  // k
  
  // 0 0 1 1 1 2 2 3 3 4
  //     i
  // k
 
  let k = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[k]) {
      k++
      nums[k] = nums[i]
    }
  }

  return k + 1

};