/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) { 

  let out = new Array(nums.length)

  for(let i = 0; i< nums.length; i++) {
    let num = nums[i]

    out[i] = num
    out[i+ nums.length] = num
  }
  return out
};