/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {

  while(nums.length !== 1) {
    // console.log(nums)
    let newNums = new Array(nums.length / 2) 

    for(let i = 0;i < nums.length/2; i++) {
      let num = nums[i]
      let newNum
      if(i % 2 === 0) {
        newNum = Math.min(nums[2*i], nums[2*i+1])
      } else {
        newNum = Math.max(nums[2*i], nums[2*i+1])
      }
      newNums[i] = newNum
    }
    nums = newNums
  }  
  return nums[0]
};