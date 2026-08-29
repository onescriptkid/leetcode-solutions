/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length === 0) return []
  let start
  let prev
  let out = []
  for(let num of nums) {
    if(prev === undefined) {
      prev = num
      start = num
    } else if(prev+1 !== num) {
      if(prev === start) {
        out.push(''+prev)
      } else {
        out.push(`${start}->${prev}`)
      }
      prev = num
      start = num
    } else {
      prev = num
    }
  }

  if(prev === start) {
    out.push(''+prev)
  } else {
    out.push(`${start}->${prev}`)
  }

  return out
};