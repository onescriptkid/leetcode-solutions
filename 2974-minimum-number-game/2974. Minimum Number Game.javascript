/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {

  // 5 4 2 3
  // 5 4 3 2
  nums.sort((a,b) => a > b ? -1 : 1)    
  let arr = []
  while(nums.length > 0) {
    let alice = nums.pop()
    let bob = nums.pop()
    arr.push(bob)
    arr.push(alice)
  }
  return arr
};