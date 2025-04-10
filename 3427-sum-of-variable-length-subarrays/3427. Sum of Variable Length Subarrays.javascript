/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {

  // 0 1 2
  // 2 3 1

  // 2 5 6
  // l   r

  // i 
  // 0
  // 1

  let lsums = []
  let lsum = 0
  for(let num of nums) {
    lsum+=num
    lsums.push(lsum)
  }

  let total = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let start = Math.max(0, i - nums[i])

    let prefixsum = lsums[start - 1]
    if(prefixsum === undefined) prefixsum = 0
    let sum = lsums[i] - prefixsum
    total+=sum
  }
  return total
}