/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {

   let max = 0
   let curr = 0
   let prev = undefined;

   for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(prev === undefined) {
      curr = 1
    } else if(num > prev) {
      curr++
    } else {
      curr = 1
    }

    if(curr > max) {
      max = curr;
    }

    prev = num
   } 
   return max
};