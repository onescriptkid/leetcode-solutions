/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {

  let currset = new Set()

  let ops = 0
  while(nums.length > 0) {
    let num = nums.pop()
    if(num <= k && !currset.has(num)) {
      currset.add(num)
    }
    ops++
    if(currset.size === k) {
      break;
    }
  }
  return ops
};