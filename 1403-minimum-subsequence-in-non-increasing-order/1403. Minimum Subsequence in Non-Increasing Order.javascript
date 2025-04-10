/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {

  nums.sort((a,b) => {
    if(a > b) {
      return -1
    } else {
      return 1
    }
  })

  let sum = 0
  for(let i = 0; i < nums.length;i++) {
    let num = nums[i]
    sum+=num
  }

  let currsum = 0
  let out = []
  for(let i = 0; i < nums.length ;i++) {
    let num = nums[i]
    out.push(num)
    currsum+=num
    if(currsum > (sum - currsum)) {
      return out
    }
  }


};