/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {

   for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let left = nums[i-1]
    let right = nums[i+1]
    if(left !== undefined && num %2 === left %2) {
      return false
    }
    if(right !== undefined && num % 2 === right %2) {
      return false
    }
   } 
   return true
};