/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
  let xor = 0
  let set = new Set()
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(set.has(num)) {
      xor = xor ^ num
    }
    set.add(num)

  }
  return xor
};