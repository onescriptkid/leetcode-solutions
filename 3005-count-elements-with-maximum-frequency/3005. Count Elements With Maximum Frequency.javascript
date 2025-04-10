/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {

  let counts = {}
  let maxFreq
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(counts[num] === undefined) {
      counts[num] = 1
    } else {
      counts[num]++
    }
    if(maxFreq === undefined) {
      maxFreq = counts[num]
    } else if(counts[num] > maxFreq) {
      maxFreq = counts[num]
    }
  }

  let chars = Object.keys(counts)
  let total = 0
  for(let char of chars) {
    let count = counts[char]
    if(maxFreq === count) {
      total+=maxFreq
    }
  }
  return total



};