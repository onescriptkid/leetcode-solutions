/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // let set = new Set()
  // for(let num of nums) {
  //   if(set.has(num)) {
  //     return false
  //   }
  // }
  return new Set(nums).size !== nums.length
};