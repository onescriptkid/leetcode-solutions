/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
  let out = []
   for(let num of nums) {
    if(num % 2 === 0) {
      out.push(0)
    } else {
      out.push(1)
    }
   } 

   out = out.sort((a,b) => a > b ? 1 : -1)
   return out
};