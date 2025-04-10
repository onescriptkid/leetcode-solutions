/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

  let obj = {}

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    obj[num] = true
  }

  // 100 4 200 1 3 2
  // 101 - 99
  let max = 0
  // console.log(obj)
  const keys = Object.keys(obj)
  // console.log(keys)
  for(let i = 0; i < keys.length; i++) {
    let num = Number(keys[i])
    let count = 1

    // forward
    let inc = num + 1
    while(obj[inc] !== undefined) {
      delete obj[inc]
      count++
      inc++
    }

    let dec = num - 1
    while(obj[dec] !== undefined) {
      delete obj[dec]
      count++
      dec--
    }

    if(count > max) {
      max = count
    }
  }
  return max
};