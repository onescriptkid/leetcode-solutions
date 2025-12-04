/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  // 1  2   3 4 
  
  // 1  1   2 6  ltor

  // 24 12  4 1  rtol

  let ltor = []
  let lprod = 1
  for(let num of nums) {
    ltor.push(lprod)
    lprod = lprod * num
  }

  let rtol = []
  let rprod = 1
  for(let i = nums.length - 1; i >= 0; i--) {
    rtol[i] = rprod
    rprod = rprod * nums[i]
  }


  let out = []
  for(let i = 0; i < nums.length; i++) {
    let left = ltor[i]
    let right = rtol[i]
    out.push(left*right)
  }

  return out


};