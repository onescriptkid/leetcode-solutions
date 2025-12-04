/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let even = 0
  let odd = 1
  for(let i = 0; i < nums.length; i++) {
    if(i %2 === nums[i] %2) continue

    while(nums[even] % 2 === 0) {
      even+=2
    }
    while(nums[odd] % 2 === 1) {
      odd+=2
    }

    let tmp = nums[even]
    nums[even] = nums[odd]
    nums[odd] = tmp
  }   
  return nums
};