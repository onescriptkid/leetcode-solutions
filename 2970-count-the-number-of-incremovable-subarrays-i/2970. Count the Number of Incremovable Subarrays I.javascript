/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {

  // 1 2 3 4
  // i
  // j
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    for(let j = i; j < nums.length; j++) {
      let num = nums[i]
      let inc = [...nums.slice(0, i), ...nums.slice(j+1)]
      let isInc = true
      // console.log('inc', inc)
      for(let k = 1; k < inc.length; k++) {
        if(inc[k-1] >= inc[k]) {
          isInc = false
          break;
        }
      }
      if(isInc) {
        count++
      }
    }
  }   
  return count
};