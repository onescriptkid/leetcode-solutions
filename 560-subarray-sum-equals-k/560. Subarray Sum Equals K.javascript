/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // 0040 k=4 => 6   
  // xxx
  //  xx
  //   x
  // xxxx
  //  xxx
  //   xx
  let prefixsum = 0
  let map = {0:1}
  let count = 0

  for(let num of nums) {
    prefixsum+=num

    count+=(map[prefixsum-k] || 0)
    map[prefixsum] =(map[prefixsum] || 0) + 1
  }

  return count
};