/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {

  let mintotal = 0
  let total = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    total+=num
    if(mintotal === undefined) {
      mintotal = total
    } else if(total < mintotal) {
      mintotal = total 
    }
  }
  return Math.abs(mintotal) + 1
};