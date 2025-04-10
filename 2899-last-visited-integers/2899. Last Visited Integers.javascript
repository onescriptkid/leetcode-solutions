/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
  let seen = []
  let ans = []
  let k = 0
  for(let num of nums) {

    if(num > 0) {
      seen.unshift(num)
      k=0
    } else {
      k++
      if(k <= seen.length) {
        let e = seen[k-1]
        ans.push(e)
      } else {
        ans.push(-1)
      }
    }
  }
  return ans
};