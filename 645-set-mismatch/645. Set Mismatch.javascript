/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
   // 1 2 2 4 
   //     x
  let freq = {}
  for(let i = 1; i <= nums.length; i++) {
    freq[i] = 0
  }

  for(let num of nums) {
    freq[num]++
  }
  let out = []
  for(let k in freq) {
    if(freq[k] === 2) out[0] = Number(k)
    if(freq[k] === 0) out[1] = Number(k)
  }

  return out

};