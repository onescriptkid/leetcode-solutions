/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let out = []

  for(let i = 0; i < nums.length; i++) {
    let numi = nums[i]
    let count = 0;
    for(let j = 0; j < nums.length; j++) {
      let numj = nums[j]
      if(numj < numi && i !== j) {
        count++
      }
    }
    out.push(count)
    // console.log(out)
  }
  return out
};