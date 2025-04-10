/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {

  //    
  let out = []
  for(let i = 0; i < nums.length; i+=2) {
    let freq = nums[i]
    let val = nums[i+1]
    // let sub = []
    for(let j = 0; j < freq; j++) {
      out.push(val)
    }
  }
  return out
};