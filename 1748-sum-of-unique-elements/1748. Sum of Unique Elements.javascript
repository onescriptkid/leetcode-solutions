/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {

  let freq = {}
  for(let num of nums) {
    if(freq[num] === undefined) {
      freq[num] = 1
    } else {
      freq[num]++
    }
  }
  let sum = 0
  for(let key of Object.keys(freq)) {
    let count = freq[key]
    if(count === 1) {
      sum+= Number(key)
    }
  }
  return sum
};