/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  let arr = nums.map((v,k) => [v,k])
  arr.sort((a,b) => {
    
    return a[0] > b[0] ? -1 : 1
    
  })

  let topk = arr.slice(0, k)
  // console.log('topk', topk)

  topk.sort((a,b) => {
    return a[1] > b[1] ? 1 : -1
  })

  let out = topk.map(v => v[0])

  // console.log('out', out)
  return out
};