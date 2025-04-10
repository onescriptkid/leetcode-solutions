/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {

  let inc = true;
  let dec = true;
  let prev = undefined;
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(prev !== undefined) {
      if(prev > num) {
        inc = false
      } else if(prev < num) {
        dec = false
      }
    }
    prev = num
  }
  if(inc) return inc
  if(dec) return dec
  return false
};