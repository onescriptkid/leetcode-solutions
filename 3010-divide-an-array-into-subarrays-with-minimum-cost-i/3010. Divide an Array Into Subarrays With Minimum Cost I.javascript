/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {


   // [first, ...before first min] 
   // [first min, ...before second min]
   // [second min, ...rest]
   // 10 3 1 1
   //      x y
   let min
   let min2
   for(let i = 1; i < nums.length; i++) {
    let num = nums[i]
    if(min === undefined) {
      min = num 
    } else if(num < min) {
      min2 = min
      min = num
    } else if(min2 === undefined) {
      min2 = num
    } else if(num < min2) {
      min2 = num
    }
   }
  console.log(nums[0], min, min2)
   return nums[0] + min + min2
};