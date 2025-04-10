/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {

  let counts = {}

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(counts[num] === undefined) {
      counts[num] = 1
    } else {
      counts[num]++
    }
  }  

  let keys = Object.keys(counts)
  console.log(counts)

  for(let key of keys) {
    let count = counts[key]

    if(count % 2 !== 0) {
      return false
    }
  }
  return true
};
