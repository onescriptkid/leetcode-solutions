/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums)
  let max = 0
  for(let num of set) {
    let tmp = num

    if(set.has(tmp - 1)) continue

    let count = 0
    while(set.has(tmp)) {
      count++
      tmp++
    }

    max = Math.max(count, max)
  }   
  return max
};