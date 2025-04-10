/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {

  let out = []
  let counts = {}
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(counts[num] === undefined) {
      counts[num] = 1
    } else {
      counts[num]++
    }
    if(counts[num] !== 1) {
      out.push(num)
    }
  }
  return out
};