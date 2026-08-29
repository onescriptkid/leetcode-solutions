/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums)   

  // 100 200 1 2 3 4
  let max = 0
  for(let num of set) {
    let tmp = num

    if(set.has(num - 1)) continue

    let count = 0
    while(set.has(tmp)) {
      tmp++
      count++
    }
    max = Math.max(max, count)
  }
  return max
};