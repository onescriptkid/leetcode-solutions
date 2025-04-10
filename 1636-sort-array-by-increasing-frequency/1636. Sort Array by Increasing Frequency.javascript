/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {

  let counts = {}
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(counts[num] === undefined) {
      counts[num] = 1
    } else {
      counts[num]++
    }
  }

  nums.sort((a,b) => {
    if(counts[a] > counts[b]) {
      return 1
    } else if(counts[a] === counts[b]) {
      if(a < b) {
        return 1
      } else {
        return -1
      }
    } else {
      return -1
    }
  })
  return nums
};