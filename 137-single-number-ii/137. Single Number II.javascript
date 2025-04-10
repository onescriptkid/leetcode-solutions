/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = {}
  for(let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] =1
    } else {
      obj[nums[i]]+=1
    }
  }
  
  let keys = Object.keys(obj)
  for(let i = 0; i < keys.length; i++){
    if(obj[keys[i]] ===1) {
      return keys[i] 
    }
  }
};