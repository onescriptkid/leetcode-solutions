/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a,b) => {
    let ab = '' + a + b
    let ba = '' + b + a

    if(ab > ba) {
      return -1
    } else {
      return 1
    }
  })   

  if(nums[0] === 0) return '0'  

  return nums.join('')
};