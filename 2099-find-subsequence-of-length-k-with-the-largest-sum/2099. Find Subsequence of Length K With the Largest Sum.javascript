/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {

  nums2 = nums.map((v,k) => [v,k])

  nums2.sort((a,b) => a[0] < b[0] ? 1 : -1)

  let out = []
  for(let i = 0; i < k ; i++) {
    let val = nums2[i]
    out.push(val)
  }

  out.sort((a,b) => a[1] > b[1] ? 1: -1)
  // console.log(out) 

  return out.map(v => v[0])
};