/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {

  let freq = {}
  let count = 0
  for(let num of nums) {

    if(freq[num] === undefined) {
      freq[num] = 1
    } else {
      count+=freq[num]
      freq[num]++
    }

  }
  return count
};