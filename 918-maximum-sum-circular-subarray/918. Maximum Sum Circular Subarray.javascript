/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let max = nums[0]
  let min = nums[0]
  let currmax = 0
  let currmin = 0
  let total = 0

  for(let num of nums) {
    currmax = Math.max(currmax+num, num)
    currmin = Math.min(currmin+num, num)

    max = Math.max(max, currmax)
    min = Math.min(min, currmin)
    total+=num 
  }

  let opt1 = max
  if(max < 0) return opt1

  let opt2 = total - min

  return Math.max(opt1, opt2)
};