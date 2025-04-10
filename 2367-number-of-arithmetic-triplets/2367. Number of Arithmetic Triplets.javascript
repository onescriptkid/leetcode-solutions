/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {

  let set = new Set()
  let count = 0
  for(let k = 0; k < nums.length; k++) {
    let num = nums[k]
    let prev = nums[k] - diff
    let prev2 = nums[k] - diff * 2

    if(set.has(prev) && set.has(prev2)) {
     count++ 
    }
    set.add(num)
  }   
  return count
};