/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
  let counts = {}

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num % 2 === 0) {
      if(counts[num] === undefined) {
        counts[num] = 1
      } else {
        counts[num]++
      }
    }
  }

  let elements = Object.keys(counts)
  let max = undefined
  let maxelement = undefined
  for(let element of elements) {
    element = Number(element)
    let count = counts[element]
    if(max === undefined) {
      max = count
      maxelement = element
    } else if(count > max) {
      max = count
      maxelement = element
    } else if(count === max) {
      if(element < maxelement) {
        maxelement = element
      }
    }
  }
  if(max === undefined) return -1

  return Number(maxelement)
};