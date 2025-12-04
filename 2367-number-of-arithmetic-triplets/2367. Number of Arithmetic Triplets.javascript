/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {

  let set = new Set()
  let count = 0
  for(let num of nums) {

    if(set.has(num - diff) && set.has(num - diff * 2)) {
      count++
    }
    
    set.add(num)
  }

  return count

};