/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // 4 3 2 7 8 2 3 1
  // 0 1 2 3 4 5 6 7
  // - - - - -     -     
  //   x x      
   // new Set(nums) 
  // let fullset = new Set()
  // let numset = new Set(nums)
  // let out = []
  // let xor = 0
  // for(let i = 0; i < nums.length; i++) {
  //   let num = nums[i]
  //   xor = xor^num
  //   if(xor === 0) {
  //     out.push(num)
  //   }
  //   // fullset.add(i+1)
  // }

  // for(let num of fullset) {
  //   if(!numset.has(num)) {
  //     out.push(num)
  //   }
  // }

  let out = []

  for(let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i])
    if(nums[num - 1] > 0) {
      nums[num - 1] = -nums[num - 1]
    }
  }
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num > 0) {
      out.push(i+1)
    } 
  }
  return out
};