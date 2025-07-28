/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums)
  //  1 2 3 4     100 200
  //p c n
  let max = 0
  for(let num of set) {
    let tmp = num +1
    let count = 1
    // console.log('num', num, 'skip', set.has(num-1))
    if(set.has(num-1)) continue

    while(set.has(tmp)) {
      count++
      tmp++
    }

    max = Math.max(count, max)
  }
  return max
};