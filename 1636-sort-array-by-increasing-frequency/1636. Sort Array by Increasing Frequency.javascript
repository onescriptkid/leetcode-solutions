/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {

  let freq = {}
  for(let num of nums) {
    freq[num] = (freq[num] || 0) + 1
  }

  nums.sort((a,b) => {

    if(freq[a] > freq[b]) {
      return 1
    } else if(freq[a] < freq[b]) {
      return -1
    } else {
      if(a < b) {
        return 1
      } else {
        return -1
      }
    }
  })
  return nums
};