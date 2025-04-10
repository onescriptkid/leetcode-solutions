/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {

  let counts = {}
  let max = undefined;
  let target = undefined;

  for(let i = 0; i < nums.length - 1; i++) {
    let k = nums[i]
    let t = nums[i+1]
    if(k === key) {
      if(counts[t] === undefined) {
        counts[t] = 1
      } else {
        counts[t]++
      }
      if(max === undefined) {
        max = counts[t]
        target = t
      } else if(counts[t] > max) {
        max = counts[t]
        target = t
      }
    }
  }
  return target
};