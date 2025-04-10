/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {

  let evens = []
  let odds = []
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(i % 2 === 0) {
      evens.push(num)
    } else {
      odds.push(num)
    }
  }

  odds.sort((a,b) => a < b ? 1 : -1)
  evens.sort((a,b) => a > b ? 1 : -1)

  let out = []
  let i = 0
  let j =0
  for(let k = 0; k < nums.length; k++) {
    if(k % 2 === 0) {
      out.push(evens[i])
      i++
    } else {
      out.push(odds[j])
      j++
    }
  }
  return out

};