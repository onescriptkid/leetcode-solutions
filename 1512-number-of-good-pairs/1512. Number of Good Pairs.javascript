/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  
  let counts = {}
  let total = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(counts[num] === undefined) {
      counts[num] = 1
    } else {
      total+=counts[num]
      counts[num]++
    }
  }
  return total
};