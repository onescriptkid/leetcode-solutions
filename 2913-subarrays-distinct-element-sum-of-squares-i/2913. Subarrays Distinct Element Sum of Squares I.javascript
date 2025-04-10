/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {

  //   1 2 1
  // 1 1
  // 2 1 2
  // 3 1 2 1
  // 1   2 
  // 2   2 1 
  // 1     1
  let out = 0
  for(let i = 0; i < nums.length; i++) {
    let set = new Set()
    for(let j = i; j < nums.length; j++) {
      set.add(nums[j])
      out+= set.size**2
    }
  }
  return out
};