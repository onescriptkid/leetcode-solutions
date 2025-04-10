/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  // 1 3 2 1 3 2 2
  // 1 1 2 2 2 3 3
  let counts = {}
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(counts[num] === undefined) {
      counts[num] = 1
    } else {
      counts[num]++
    }
  }

  let keys = Object.keys(counts)
  let out = [0, 0]
  for(let key of keys) {
    let count = counts[key]
    if(count %2 === 0) {
      out[0]+= count / 2
    } else {
      out[0]+= (count -1) / 2
      out[1]+=1
    }
  }
  return out
};