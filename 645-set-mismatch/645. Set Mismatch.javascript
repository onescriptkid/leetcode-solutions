/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

  let set = new Set()

  // 0 1 2 3 4
  // 1 2 2 2 3

  let out = []
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(set.has(num)) {
      out.push(num)
    }
    set.add(num)
  }

  for(let i = 0; i < nums.length; i++) {
    let num = i + 1
    if(!set.has(num)) {
      out.push(num)
    }
  }
  return out
};