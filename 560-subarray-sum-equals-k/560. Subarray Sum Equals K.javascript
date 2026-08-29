/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

  // 0400  k=4,a=6
  // --
  // ---
  // ----
  //  ---
  //  --
  //  -
  let map = {0:1}   
  let prefixsum = 0
  let count = 0
  for(let num of nums) {
    prefixsum+=num

    count+=(map[prefixsum-k]  || 0)
    map[prefixsum] =(map[prefixsum] || 0) + 1
  }
  return count
};