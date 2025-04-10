/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {

  let arr1 = [nums[0]]
  let arr2 = [nums[1]]   
  for(let i = 2; i < nums.length; i++) {
    let num = nums[i]
    let last1 = arr1[arr1.length - 1]
    let last2 = arr2[arr2.length - 1]
    if(last1 > last2) {
      arr1.push(num)
    } else {
      arr2.push(num)
    }
  }
  return [...arr1, ...arr2]
};