/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

  let set = new Set(nums)
  let max = 0
  for(let num of set) {
    let count = 1
    let tmp = num +1
    if (set.has(num - 1))  continue
    
    while (set.has(tmp) && ! set.has(num - 1)) {
      // console.log('  num', num, 'tmp', tmp)
      count++
      tmp++
    }

    if(count > max) {
      max = count
    }
  } 
  return max
};