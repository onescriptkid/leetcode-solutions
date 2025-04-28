/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {

  let min
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(target === num) {
      let abs = Math.abs(i - start)
      if(min === undefined) {
        min = abs
      } else if(abs < min) {
        min = abs
      }
    }
  }

  return min 
    
};