/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // 1  2  3  4 
  // 1  2  6  24
  // 1  24 12  4
  
  // 1  2  3  4  [4]
  //       i

  let leftprods = []
  let prev
  for(let i = 0; i < nums.length; i++) {
    if(prev === undefined) {
      leftprods.push(nums[i])
    } else {
      leftprods.push(nums[i] * leftprods[leftprods.length - 1])
    }
    prev = nums[i] * leftprods[leftprods.length - 1]
  }

  // console.log('leftprods', leftprods)

  let rightprods = new Array(nums.length)
  let next
  for(let i = nums.length - 1; i >= 0; i--) {
    if(next === undefined) {
      rightprods[i] =nums[i]
    } else {
      rightprods[i] =rightprods[i+1] *nums[i]
    }
    next =rightprods[i+1] *nums[i] 
  }
  // console.log('rightprods', rightprods)

  let out = []
  for(let i = 0; i < nums.length; i++) {
    let left = leftprods[i-1] === undefined ? 1 : leftprods[i-1]
    let right = rightprods[i+1] === undefined ? 1 : rightprods[i+1]

    out.push(left * right)
  }
  return out

    
};