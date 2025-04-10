/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let thresh = nums.length / 2
  let freq = {}
  for(let num of nums) {
    freq[num] = (freq[num] || 0) + 1
    if(freq[num] > thresh) {
      return num
    }
  }
};