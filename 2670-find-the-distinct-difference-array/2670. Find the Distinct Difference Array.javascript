/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {

  let prefixSet = new Set()
  let prefixes = []
  for(let num of nums) {
    prefixSet.add(num)
    prefixes.push(prefixSet.size)
  }
  // console.log('prefixes', prefixes)

  let suffixSet = new Set()
  let suffixes = new Array(nums.length)
  for(let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i]
    suffixSet.add(num)
    suffixes[i] = suffixSet.size
  }
  // console.log('suffixes', suffixes)

  let diffs = []
  for(let i = 0; i < nums.length; i++) {
    let diff = prefixes[i] - (suffixes[i+1] || 0)
    diffs.push(diff)
  }
  return diffs
};