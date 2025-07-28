/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  let ltor = []
  let lprod = 1
  for(let num of nums) {
    lprod=lprod*num
    ltor.push(lprod)
  } 

  let rtol = []
  let rprod = 1
  for(let i = nums.length - 1; i >= 0; i--) {
    rprod = rprod*nums[i]
    rtol[i] = rprod
  }
  // console.log(ltor)
  // console.log(rtol)

  let out = []  
  for(let i = 0; i < nums.length; i++) {
    let left = ltor[i-1] === undefined ? 1 : ltor[i-1]
    let right = rtol[i+1] === undefined ? 1 : rtol[i+1]

    let prod = left*right
    out.push(prod)
  }
  return out
  //   1   2   3  4
  // - 1   2   6  24  
  //   24  24  12  4 -


};